// src/index.ts

import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";
import { connectDB } from "./config/db";
import { intPort } from "./config/port";
import { config } from "dotenv";
config()

const start = async () => {
  try {
  
    await natsWrapper.connect("sellskill", "auth", "http://nats-srv:4222");

    natsWrapper.client.on("close", () => {
      console.log("NATS connetion closed!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    connectDB(); 
  } catch (err) { 
    console.error(err);
  }

  app.listen(intPort, () => {
    console.log("Listening on port 3000 ");
  });
};

start();