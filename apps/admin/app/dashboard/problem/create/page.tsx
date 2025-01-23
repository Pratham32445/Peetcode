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
    description: "",
    difficulty: "",
    examples: "",
    topics: "",
    structure: "",
  });

  const createProblem = async () => {
    const createProblem = await axios.post("http://localhost:3000/api/problem/create",{formData});
    console.log(createProblem);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
          <div>
            <Select
              onValueChange={(value) => handleChange("difficulty", value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Textarea
              placeholder="Problem Examples"
              value={formData.examples}
              onChange={(e) => handleChange("examples", e.target.value)}
            />
          </div>
          <div>
            <Textarea
              placeholder="Write topics by comma separated"
              value={formData.topics}
              onChange={(e) => handleChange("topics", e.target.value)}
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
