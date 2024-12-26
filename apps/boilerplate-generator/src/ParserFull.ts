export class FullProblemDefinationParser {
  problemName: string = "";
  functionName: string = "";
  InputField: { type: string; name: string }[] = [];
  OuputField: { type: string; name: string }[] = [];

  parse(file: string): void {
    const line = file.split("\n").map((line) => line.trim());

    let currentSection: string | null = null;

    line.forEach((line) => {
      if (line.startsWith("Problem Name:")) {
        this.problemName = this.extractProblemName(line);
      } else if (line.startsWith("Function Name:")) {
        this.functionName = this.extractProblemFunction(line);
      } else if (line.startsWith("Input Structure")) {
        currentSection = "Input";
      } else if (line.startsWith("Output Structure")) {
        currentSection = "Ouput";
      } else if (line.startsWith("Input Field:")) {
        if (currentSection == "Input") {
          const field = this.extractField(line);
          if (field) this.InputField.push(field);
        }
      } else if (line.startsWith("Output Field:")) {
        if (currentSection == "Output") {
        }
      }
    });
  }
  extractProblemName(line: string) {
    const match = line.match(/: "(.*)"$/);
    return match ? match[1] : "";
  }

  extractProblemFunction(line: string) {
    const match = line.match(/: (\w+)$/);
    return match ? match[1] : "";
  }

  extractField(line: string) {
    const match = line.match(/Field: (\w+(?:<\w+>)?) (\w+)$/);
    return match ? { type: match[1], name: match[2] } : null;
  }

  generateCppCode() : string{
    const inputs = this.InputField.map((input) => `${input.type}`)
  }

}
