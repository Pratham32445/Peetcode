import fs from "fs";
import path from "path";

const generateBoilerPlate = (generateFilePath: string) => {
  const structureFilePath = path.join(
    __dirname,
    generateFilePath,
    "Strcuture.md"
  );
  
  const file = fs.readFileSync(structureFilePath,"utf-8");

  const parser = new 

};
