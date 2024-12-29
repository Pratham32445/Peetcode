import path from "path";
import fs from "fs";
import client from "@repo/db/client";

const MOUNT_PATH = path.join(
  "C:\\Users\\91626\\Documents\\Harkirat\\peetcode\\apps",
  "problems"
);


export const getProblem = async (problemId: string, languageId: string) => {
  problemId = problemId.split(" ").join("-");
  const fullBoilerPlate = await getProblemFullBoilerPlate(
    problemId,
    languageId
  );

  const inputs = await getProblemInputs(problemId);
  const outputs = await getProblemOutputs(problemId);
  return { fullBoilerPlate, inputs, outputs };
};

const getProblemFullBoilerPlate = (
  problemId: string,
  languageId: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${MOUNT_PATH}/${problemId}/boilerplate-full/function.${languageId}`,
      { encoding: "utf8" },
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
};

const getProblemInputs = async (problemId: string) => {
  const Inputs = await fs.promises.readdir(
    `${MOUNT_PATH}/${problemId}/tests/inputs`
  );
  const InputsData = Promise.all(
    Inputs.map(async (file) => {
      const InputFilePath = `${MOUNT_PATH}/${problemId}/tests/inputs/${file}`;
      const InputFileData = await fs.promises.readFile(InputFilePath, "utf-8");
      return InputFileData;
    })
  );
  return InputsData;
};

const getProblemOutputs = async (problemId: string) => {
  const Outputs = await fs.promises.readdir(
    `${MOUNT_PATH}/${problemId}/tests/outputs`
  );
  const OutputData = Promise.all(
    Outputs.map(async (file) => {
      const outputFilePath = `${MOUNT_PATH}/${problemId}/tests/outputs/${file}`;
      const OutputFileData = await fs.promises.readFile(
        outputFilePath,
        "utf-8"
      );
      return OutputFileData;
    })
  );
  return OutputData;
};

export const getProblemPartialBoilerPlate = async (problemId: string) => {
  const problem  = await client.question.findFirst({
    where: { Id: problemId },
    select: { title: true },
  });  
  if(!problem || !problem.title) return ;
  const title = problem.title.split(" ").join("-");
  const Path = `${MOUNT_PATH}/${title}/boilerplate`;
  const files = await fs.promises.readdir(Path);
  const boilerPlates : Record<string,string> = {};
  for(const file of files) {
    const filePath = path.join(Path,file);
    const fileContent = await fs.promises.readFile(filePath,"utf-8");
    boilerPlates[file.split(".")[1]] = fileContent;
  }
  return boilerPlates;
};
