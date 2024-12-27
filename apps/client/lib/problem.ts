import path from "path";
import fs from "fs";

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
