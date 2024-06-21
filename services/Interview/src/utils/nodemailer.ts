import nodemailer from "nodemailer";
import emailTemplate from "./emailTemplate"
export const sentMail = (emailTemplateOption: string, email: string, subject: string, link: string, url: string, encodedData: string) => {
  console.log("sending mail util")
  console.log("process.env.NODEMAILER_EMAIL: ", process.env.NODEMAILER_EMAIL)
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
    html: emailTemplate(link, url),
  };

  mailTransporter.sendMail(details, (err) => {
    if (err) {
        console.log(err);
    } else {
      console.log("success");
    }
  });

  return details.to
};