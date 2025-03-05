import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

let secretMessage = "";

app.post("/webhook", (req: Request, res: Response) => {
  console.log("Received payload:", req.body);

  //   const { message } = req.body;
  //   secretMessage = message;

  res.status(200).send({ status: "ok" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { secretMessage };
