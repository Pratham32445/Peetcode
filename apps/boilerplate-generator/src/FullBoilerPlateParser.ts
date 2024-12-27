export class FullBoilerPlateParser {
  problemName: string = "";
  functionName: string = "";
  Inputs: { type: string; name: string }[] = [];
  Outputs: { type: string; name: string }[] = [];
  parse(structure: string) {
    const lines = structure.split("\n").map((line) => line.trim());

    let currentSection: string | null = null;

    lines.forEach((line) => {
      if (line.startsWith("Problem Name:")) {
        this.problemName = this.extractName(line);
      } else if (line.startsWith("Function Name:")) {
        this.functionName = this.extractFunction(line);
      } else if (line.startsWith("Input Structure:")) {
        currentSection = "Input";
      } else if (line.startsWith("Output Structure:")) {
        currentSection = "Output";
      } else if (line.startsWith("Field:")) {
        if (currentSection == "Input") {
          const field = this.extractField(line);
          if (field) this.Inputs.push(field);
        } else if (currentSection == "Output") {
          const field = this.extractField(line);
          console.log(field);
          if (field) this.Outputs.push(field);
        }
      }
    });
  }
  extractName(line: string): string {
    const match = line.match(/: "(.*)"$/);
    return match ? match[1] : "";
  }
  extractFunction(line: string): string {
    const match = line.match(/: (\w+)$/);
    return match ? match[1] : "";
  }
  extractField(line: string) {
    const match = line.match(/Field: (\w+(?:<\w+>)?) (\w+)$/);
    return match ? { type: match[1], name: match[2] } : null;
  }
  generateCppCode() : string {
    const inputs = this.Inputs.map((Input) => `${Input.type} ${Input.name}`).join(",");
    const inputRead
  }
}
