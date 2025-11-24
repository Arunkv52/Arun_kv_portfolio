import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send-mail", async (req, res) => {
  const { name, phone, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arunkbva@gmail.com",
      pass: "syjquwrtfqnutxbd",
    },
  });

  const mailOptions = {
    from: "arunkbva@gmail.com",
    to: "arunkbva@gmail.com",
    subject: "New Enquiry From Portfolio Website",
    text: `
Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ status: "success" });
  } catch (err) {
    console.error(err);
    res.json({ status: "error", err });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
