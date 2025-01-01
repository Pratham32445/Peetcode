import { fetchSubmissionResult } from "@/lib/submission";
import { useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "./ui/button";

const SubmissionResult = ({ submissionId }: { submissionId: string }) => {
  useEffect(() => {
    const fetchResult = async () => {
      console.log(await fetchSubmissionResult(submissionId, "submission"));
    };
    fetchResult();
  }, []);

  const customStyle = {
    ...docco,
    hljs: {
      ...docco.hljs,
      background: "#1E1E1E",
      color: "#D4D4D4",
      padding: "1.5rem",
      borderRadius: "0.5rem",
      fontSize: "14px",
      lineHeight: "1.5",
    },
    "hljs-keyword": { color: "#569CD6" },
    "hljs-string": { color: "#CE9178" }, 
    "hljs-number": { color: "#B5CEA8" },
    "hljs-function": { color: "#DCDCAA" }, // Functions
    "hljs-comment": { color: "#6A9955" }, // Comments
    "hljs-variable": { color: "#9CDCFE" }, // Variables
    "hljs-built_in": { color: "#4EC9B0" }, // Built-in functions
    "hljs-params": { color: "#E06C75" }, // Parameters - changed to a soft red
    "hljs-attr": { color: "#E06C75" }, // Attributes - matching params
  };

  return (
    <div className="p-14">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <p className="text-bgSucess text-xl font-bold">Accepted</p>
            <p className="text-sm text-neutral-400">63 / 63 testcases passed</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-sm items-center">Pratham Mehta</p>
            <p className="text-xs text-neutral-400">
              submitted at Dec 21, 2024 09:02
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Button className="px-10 py-4 bg-lightSubmit text-white">
            Editorial
          </Button>
          <Button className="bg-bgSucess px-10 py-4 text-white">
            Solution
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <SyntaxHighlighter
          language="javascript"
          style={customStyle}
          className="shadow-lg"
          showLineNumbers={true}
          wrapLines={true}
        >
          {`// Example submission code
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default SubmissionResult;
