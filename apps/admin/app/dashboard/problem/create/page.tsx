"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import axios from "axios";

const AddProblem = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    difficulty: "",
    example: [] as string[],
    topics: [] as string[],
    structure: "",
    constraints: [] as string[],
    solution: "",
    testcases: [],
  });

  const createProblem = async () => {
    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:3000/api/problem/create",
        formData
      );
      console.log("Problem created:", response.data);
    } catch (error) {
      console.error("Error creating problem:", error);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleArrayChange = (
    field: "example" | "topics" | "constraints",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value.split(",").map((item) => item.trim()),
    }));
  };

  console.log(formData);

  return (
    <div>
      <div>
        <p>Add Problem</p>
        <div className="flex flex-col gap-6 mt-4">
          <Input
            placeholder="Problem Title..."
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
          <Textarea
            placeholder="Problem Description"
            value={formData.desc}
            onChange={(e) => handleChange("desc", e.target.value)}
          />
          <div>
            <Select
              onValueChange={(value) => handleChange("difficulty", value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EASY">Easy</SelectItem>
                <SelectItem value="MEDIUM">Medium</SelectItem>
                <SelectItem value="HARD">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Textarea
              placeholder="Problem Examples (comma-separated)"
              value={formData.example.join(", ")}
              onChange={(e) => handleArrayChange("example", e.target.value)}
            />
          </div>
          <div>
            <Textarea
              placeholder="Write topics (comma-separated)"
              value={formData.topics.join(", ")}
              onChange={(e) => handleArrayChange("topics", e.target.value)}
            />
          </div>
          <div>
            <Textarea
              placeholder="Constraints (comma-separated)"
              value={formData.constraints.join(", ")}
              onChange={(e) => handleArrayChange("constraints", e.target.value)}
            />
          </div>
          <div>
            <p>Main...</p>
            <Textarea
              placeholder="Write your Structure"
              className="h-[200px]"
              value={formData.structure}
              onChange={(e) => handleChange("structure", e.target.value)}
            />
          </div>
          <Button onClick={createProblem}>Create Problem</Button>
        </div>
      </div>
    </div>
  );
};

export default AddProblem;
