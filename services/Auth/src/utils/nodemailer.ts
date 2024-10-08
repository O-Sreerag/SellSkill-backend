import nodemailer from "nodemailer";
import emailTemplate from "./emailTemplate"
export const sentMail = (email: string, subject: string, link: string) => {
  console.log("sending mail util")
  console.log("process.env.NODEMAILER_EMAIL: ", process.env.NODEMAILER_EMAIL)
  console.log("process.env.NODEMAILER_PASSWORD: ", process.env.NODEMAILER_PASSWORD)
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });
  let details = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: subject,
    html: emailTemplate(link),
  };

  mailTransporter.sendMail(details, (err) => {
    if (err) {
        console.log(err);
        // throw new Error('The user was not found');
    } else {
      console.log("success");
    }
  });

  return details.to
};