import express, { Request, Response } from "express";

const app = express();
app.use(express.text());

app.post("/webhook", (req: Request, res: Response) => {
  console.log("Received Body:", req.body);

  const regex = /row=(\d+) column=(\d+): (\S)/g;
  let matches;
  let entries: { row: number; col: number; char: string }[] = [];

  // Extract row, column, and character
  while ((matches = regex.exec(req.body)) !== null) {
    entries.push({
      row: parseInt(matches[1], 10),
      col: parseInt(matches[2], 10),
      char: matches[3],
    });
  }

  // Sort first by row, then by column
  entries.sort((a, b) => a.row - b.row || a.col - b.col);

  const secretMessage = entries.map((entry) => entry.char).join("");

  console.log("Extracted Secret Code:", secretMessage);

  res.status(200).json({ message: "Webhook received successfully" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
