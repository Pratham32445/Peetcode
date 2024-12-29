"use client";
import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { LoaderCircle } from "lucide-react";

const QuestionEditor = ({
  boilerPlates,
}: {
  boilerPlates: Record<string, string>;
}) => {
  const [language, setlanguage] = useState("cpp");
  const [editorState, setEditorState] = useState("");
  const [allBoilerPlates, setAllBoilerPlates] =
    useState<Record<string, string>>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setAllBoilerPlates(boilerPlates);
    setEditorState(boilerPlates[language]);
    setLoading(false);
  }, []);

  const formatCode = (editor: any) => {
    editor.getAction("editor.action.formatDocument").run();
  };

  return !loading ? (
    <div className="w-full h-full">
      <Editor
        height="100%"
        language={"cpp"}
        theme="vs-dark"
        defaultValue={editorState}
        onMount={formatCode}
        options={{
          minimap: { enabled: false },
          fontSize: 18,
          lineNumbers: "on",
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          cursorStyle: "line",
        }}
      />
    </div>
  ) : (
    <LoaderCircle className="animate-spin" />
  );
};

export default QuestionEditor;
