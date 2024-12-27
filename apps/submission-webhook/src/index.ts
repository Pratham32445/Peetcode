import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

const PORT = 5000;

app.use(express.json());

app.use(cors());

app.put("/api/submission-callback", (req: Request, res: Response) => {
  try {
    console.log(req.body);
    return res.status(201);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT);
