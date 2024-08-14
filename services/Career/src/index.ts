// src/index.ts

import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";
import { connectDB } from "./config/db";
import { intPort } from "./config/port";
import { config } from "dotenv";
import { ApplicantCreatedListener } from "./events/listener/applicantCreatedListener";
import { RecruiterCreatedListener } from "./events/listener/recruiterCreatedListener";
import { ApplicantStatusChangedListener } from "./events/listener/applicantStatusChangedListener";
import { RecruiterStatusChangedListener } from "./events/listener/recruiterStatusChangedListener";
config()

const start = async () => {

  try {
    await natsWrapper.connect("sellskill", "career", "http://nats-srv:4222"); 

    natsWrapper.client.on("close", () => {
      console.log("NATS connetion closed!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    new ApplicantCreatedListener(natsWrapper.client).listen();
    new RecruiterCreatedListener(natsWrapper.client).listen();
    new ApplicantStatusChangedListener(natsWrapper.client).listen();
    new RecruiterStatusChangedListener(natsWrapper.client).listen();
    connectDB();
  } catch (err) {
    console.error(err);
  }

  app.listen(intPort, () => {
    console.log("Listening on port 3001");
  });
};

start();