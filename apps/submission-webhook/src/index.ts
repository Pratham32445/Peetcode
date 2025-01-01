import express, { Request, Response } from "express";
import cors from "cors";
import client from "@repo/db/client";
import base64 from "base-64";
import { testCase } from "./zod";

const app = express();

const PORT = 5000;

app.use(express.json());

app.use(cors());

app.put("/api/submission-callback", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    if (req.body.status.id == 6 || req.body.status.id == 11) {
      const testCase = await client.testCase.findFirst({
        where: { token: req.body.token },
      });
      if (testCase?.status == "PENDING") {
        const res = await client.testCase.update({
          where: {
            token: req.body.token,
          },
          data: {
            status: req.body.status.description,
          },
        });
        const submission = await client.submission.findFirst({
          where: {
            Id: res.submissionId,
          },
        });
        if (submission?.status == "PENDING") {
          await client.submission.update({
            where: { Id: submission.Id },
            data: {
              status: "ERROR",
              errorType: req.body.status.description,
              message: req.body.compile_output
                ? base64.decode(req.body.compile_output)
                : "",
            },
          });
        }
      }
      return res.status(201).send("chill testcase");
    }
    const parsedBody = testCase.safeParse(req.body);
    return res.status(201).json({
      message: "send",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT);
