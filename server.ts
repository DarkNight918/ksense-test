import express, { Request, Response } from "express";

const app = express();

// Middleware
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// Webhook
app.post("/webhook", (req: Request, res: Response) => {
  console.log("Received Headers:", req.headers);
  console.log("Received Body:", req.body);

  let secretMessage = "";

  try {
    if (typeof req.body === "object" && req.body !== null) {
      secretMessage =
        req.body.secretCode || req.body.message || req.body.secret || "";
    } else if (typeof req.body === "string" && req.body.trim() !== "") {
      const parsedBody = JSON.parse(req.body);
      secretMessage =
        parsedBody.secretCode || parsedBody.message || parsedBody.secret || "";
    }
  } catch (error) {
    console.error("Error parsing request body:", error);
  }

  if (!secretMessage) {
    console.warn("No secret message found in the payload!");
  } else {
    console.log("Extracted Secret Code:", secretMessage);
  }

  res.status(200).json({ message: "Webhook received successfully" });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
