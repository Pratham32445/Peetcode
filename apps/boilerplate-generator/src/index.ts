import { BoilerPlateParser } from "./BoilerPlateParser";
import Redis from "ioredis";
import dotenv from "dotenv";
import path from "path"; 
import fs from "fs";
import { FullBoilerPlateParser } from "./FullBoilerPlateParser";

dotenv.config();

console.log(process.env.REDIS_URL);

const subscriber = new Redis(process.env.REDIS_URL!);

const Queue_name = "Push_Problems";

const rootPath = path.join(__dirname,"../../","problems");


const generateBoilerPlate = (structure: string) => {
  const parser = new BoilerPlateParser();
  parser.parse(structure);

  const CppCode = parser.generateCpp();
  const JsCode = parser.generateJs();
  const TsCode = parser.generateTs();

  return { CppCode, JsCode, TsCode };
};

const generateFullBoilerPlate = () => {
  const parser = new FullBoilerPlateParser(); 

}

async function main() {
  while (1) {
    const res = await subscriber.brpop(Queue_name, 0);
    if (!res) return;
    const parsedData = JSON.parse(res[1]);
    const { CppCode, JsCode, TsCode } = generateBoilerPlate(
      parsedData.structure
    );
    generateFile();
  }
}

main();
