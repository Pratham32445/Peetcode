import fs from "fs";

export const createDir = (dirPath: string) => {
  try {
    if (fs.existsSync(dirPath)) return;
    fs.mkdirSync(dirPath);
  } catch (error) {
    console.log(error);
  }
};

const generateFile = () => {
  
}
