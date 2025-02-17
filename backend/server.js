const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
fetch("https://personal-portfolio-frontend-0186.onrender.com/");
require('dotenv').config(); // Load environment variables

// Server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3001, () => console.log("Server Running"));

// Log environment variables (optional)
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Use environment variable for security
    pass: process.env.EMAIL_PASS, // Use environment variable for security
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Error with email configuration:", error);
  } else {
    console.log("Ready to Send");
  }
});

// Define a GET route for the root URL
router.get("/", (req, res) => {
  res.send("Welcome to the Email Sending Service!");
});

// Define a GET route for the /contact URL
router.get("/contact", (req, res) => {
  res.send("Contact page - Please submit your message using the POST method.");
});

// Define the POST route for contact form submissions
router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName; // Add a space between first and last name
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  
  const mail = {
    from: name,
    to: process.env.EMAIL_USER, // Use environment variable for security
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});