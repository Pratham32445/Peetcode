import fs from "fs";
import path from "path";

export const createDir = (dirPath: string) => {
  try {
    if (fs.existsSync(dirPath)) return;
    fs.mkdirSync(dirPath);
  } catch (error) {
    console.log(error);
  }
};

export const generateFile = (filePath: string, fileContent: string) => {
  try {
    if (!fs.existsSync(path.dirname(filePath))) return;
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) return false;
      return true;
    });
  } catch (error) {
    console.log(error);
  }
};
