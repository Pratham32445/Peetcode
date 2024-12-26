export class ProblemDefinationParser {
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
        if(currentSection == "Output") {
            
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

  generateCpp(): string {
    const inputs = this.InputField.map(
      (field) => `${field.type} ${field.name}`
    ).join(",");
    return `${this.OuputField[0].type} ${this.functionName}(${inputs}) {\n // Implemenentation Goes Here \n  }`;
  }

  generateJs(): string {
    const inputs = this.InputField.map((field) => `${field.name}`).join(",");
    return `function ${this.functionName}(${inputs}) {\n "Implementation starts code"}`;
  }

  generateTs(): string {
    const inputs = this.InputField.map(
      (field) => `${field.name}:${field.type}`
    ).join(",");
    return `function ${this.functionName}(${inputs}):${this.OuputField[0]}  {\n Implement Here}`;
  }

  generateJava(): string {
    const inputs = this.InputField.map(
      (field) => `${field.type} ${field.name}`
    ).join(",");
    return `class Solution {\n \t public ${this.OuputField[0]} ${this.functionName}(${inputs})} {\n Start Code Here}`;
  }
}
