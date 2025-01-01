import { fetchSubmissionResult } from "@/lib/submission";
import { useContext, useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { ScrollArea } from "./ui/scroll-area";
import { LoaderCircle } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { MainContext } from "@/context/State";

const SubmissionResult = ({ submissionId }: { submissionId: string }) => {
  const [submission, setSubmission] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isProblemSubmitted, setIsProblemSubmitted } = useContext(MainContext);
  useEffect(() => {
    const fetchResult = async () => {
      const res = await fetchSubmissionResult(submissionId, "submission");
      if (res) {
        setSubmission(res.submission);
        setIsLoading(false);
      }
    };
    fetchResult();
  }, []);

  const customStyle = {
    ...docco,
    hljs: {
      ...docco.hljs,
      background: "#333333",
      color: "#D4D4D4",
      padding: "1.5rem",
      borderRadius: "0.5rem",
      fontSize: "14px",
      lineHeight: "1.5",
    },
    "hljs-keyword": { color: "#569CD6" },
    "hljs-string": { color: "#CE9178" },
    "hljs-number": { color: "#B5CEA8" },
    "hljs-function": { color: "#DCDCAA" },
    "hljs-comment": { color: "#6A9955" },
    "hljs-variable": { color: "#9CDCFE" },
    "hljs-built_in": { color: "#4EC9B0" },
    "hljs-params": { color: "#E06C75" },
    "hljs-attr": { color: "#E06C75" },
  };

  console.log(submission);

  return (
    <ScrollArea className="h-[90vh]">
      {!isLoading && submission ? (
        <div className="px-10 py-4">
          <div
            className="py-3 cursor-pointer"
            onClick={() =>
              setIsProblemSubmitted({ ...isProblemSubmitted, status: false })
            }
          >
            <ArrowLeft />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                {submission.status == "ERROR" && (
                  <div>
                    <p className="text-red-400 text-2xl">
                      {submission.errorType}
                    </p>
                  </div>
                )}
                {submission.status == "ACCEPTED" && (
                  <div>
                    <p className="text-bgSucess text-xl font-bold">Accepted</p>
                    <p className="text-sm text-neutral-400">
                      63 / 63 testcases passed
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-sm items-center">Pratham Mehta</p>
                      <p className="text-xs text-neutral-400">
                        submitted at Dec 21, 2024 09:02
                      </p>
                    </div>
                  </div>
                )}
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
            {submission.status == "ERROR" && (
              <div className="bg-[#362b2a] p-5 py-10 rounded">
                <div>
                  <p className="text-red-400">{submission.message}</p>
                </div>
              </div>
            )}
            {submission.status == "ACCEPTED" && (
              <SyntaxHighlighter
                language="javascript"
                style={customStyle}
                className="shadow-lg"
                showLineNumbers={true}
                wrapLines={true}
              >
                {`#include <bits/stdc++.h>
using namespace std;

// Custom comparator for priority queue
struct CompareNodes {
    bool operator()(pair<int, int>& a, pair<int, int>& b) {
        return a.second > b.second;
    }
};

class Solution {
private:
    // Helper function to check if a cell is valid
    bool isValid(int x, int y, int rows, int cols) {
        return x >= 0 && x < rows && y >= 0 && y < cols;
    }
    
public:
    vector<vector<int>> shortestPathMatrix(vector<vector<int>>& grid) {
        if (grid.empty() || grid[0].empty()) return {};
        
        int rows = grid.size();
        int cols = grid[0].size();
        
        // Direction vectors for moving in 4 directions
        vector<int> dx = {-1, 0, 1, 0};
        vector<int> dy = {0, 1, 0, -1};
        
        // Initialize distance matrix with infinity
        vector<vector<int>> distance(rows, vector<int>(cols, INT_MAX));
        distance[0][0] = grid[0][0];
        
        // Priority queue to store {cell position, current distance}
        priority_queue<pair<int, int>, vector<pair<int, int>>, CompareNodes> pq;
        pq.push({0, grid[0][0]});
        
        // Process cells in order of increasing distance
        while (!pq.empty()) {
            auto [pos, dist] = pq.top();
            pq.pop();
            
            int x = pos / cols;
            int y = pos % cols;
            
            // Skip if we've found a better path
            if (dist > distance[x][y]) continue;
            
            // Try all four directions
            for (int i = 0; i < 4; i++) {
                int newX = x + dx[i];
                int newY = y + dy[i];
                
                if (isValid(newX, newY, rows, cols)) {
                    int newDist = distance[x][y] + grid[newX][newY];
                    
                    // Update distance if we found a shorter path
                    if (newDist < distance[newX][newY]) {
                        distance[newX][newY] = newDist;
                        pq.push({newX * cols + newY, newDist});
                    }
                }
            }
        }
        
        return distance;
    }
    
    // Function to print the shortest path matrix
    void printMatrix(vector<vector<int>>& matrix) {
        for (const auto& row : matrix) {
            for (int val : row) {
                if (val == INT_MAX) {
                    cout << "INF ";
                } else {
                    cout << val << " ";
                }
            }
            cout << "\\n";
        }
    }
};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    
    // Example usage
    Solution solution;
    vector<vector<int>> grid = {
        {1, 3, 1},
        {1, 5, 1},
        {4, 2, 1}
    };
    
    vector<vector<int>> result = solution.shortestPathMatrix(grid);
    solution.printMatrix(result);
    
    return 0;
}`}
              </SyntaxHighlighter>
            )}
          </div>
          <div className="my-6">
            <Textarea
              placeholder="Write your Notes Here..."
              className="bg-[#333333] h-[300px] text-[20px] p-5"
            />
          </div>
        </div>
      ) : (
        <div className="h-[70vh]">
          <div className="flex h-full justify-center items-center">
            <LoaderCircle className="animate-spin" />
          </div>
        </div>
      )}
    </ScrollArea>
  );
};

export default SubmissionResult;
