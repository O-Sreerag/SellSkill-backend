// src/index.ts

import mongoose from "mongoose";
import { app } from "./app";
// import { natsWrapper } from "./nats-wrapper";
// import { ProductCreatedListener } from "./events/listener/product-created-listener";
// import { ProductDeletedListener } from "./events/listener/product-deleted-listener";
import { connectDB } from "./config/db";
import { intPort } from "./config/port";
import { config } from "dotenv";
config()

const start = async () => {

//   if (!process.env.MONGO_URI) {
//     throw new Error("MONGO_URI must be defined");
//   }

  try {
    

//     await natsWrapper.connect("ecom", "321", "http://nats-srv:4222");

//     natsWrapper.client.on("close", () => {
//       console.log("NATS connetion closed!");
//       process.exit();
//     });

//     process.on("SIGINT", () => natsWrapper.client.close());
//     process.on("SIGTERM", () => natsWrapper.client.close());

//     new ProductCreatedListener(natsWrapper.client).listen();
//     new ProductDeletedListener(natsWrapper.client).listen();
    connectDB();
  } catch (err) {
    console.error(err);
  }

  app.listen(intPort, () => {
    console.log("Listening on port 3001");
  });
};

start();