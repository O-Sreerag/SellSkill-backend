import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";
import { connectDB } from "./config/db";
import { intPort } from "./config/port";
import { config } from "dotenv";
import { ApplicantCreatedListener } from "./events/listener/applicantCreatedListener";
import { RecruiterCreatedListener } from "./events/listener/recruiterCreatedListener";
import { createServer } from "http";
import { Server } from "socket.io";

config();

const start = async () => {
  try {
    await natsWrapper.connect("sellskill", "chat", "http://nats-srv:4222");

    natsWrapper.client.on("close", () => {
      console.log("NATS connection closed!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    new ApplicantCreatedListener(natsWrapper.client).listen();
    new RecruiterCreatedListener(natsWrapper.client).listen();

    connectDB();
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit process with error code
  }

  const server = createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  server.listen(intPort, () => {
    console.log(`Server listening on port ${intPort}`);
  });

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("join", (roomId) => {
      socket.join(roomId);
      console.log(`User joined room: ${roomId}`);
    });

    socket.on("message", (msgData) => {
      io.to(msgData.room).emit("message", msgData);
      console.log("Message: ", msgData);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};

start();
