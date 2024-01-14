import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "./CodeEditor.css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { Editor, EditorChange } from "codemirror";
import { FaCompress, FaExpand } from "react-icons/fa";
import { LuParentheses } from "react-icons/lu";
import { FaStarOfLife } from "react-icons/fa6";
import { RxSlash } from "react-icons/rx";
import { useState } from "react";
import { CodeEditorProps } from "../../types";

export const CodeEditor = ({
  language,
  displayName,
  value,
  onChange,
}: CodeEditorProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (
    _editor: Editor,
    _data: EditorChange,
    value: string
  ) => {
    onChange(value);
  };

  let iconComponent;
  switch (displayName) {
    case "HTML":
      iconComponent = (
        <span className="htmlIcon">
          <RxSlash />
        </span>
      );
      break;
    case "JavaScript":
      iconComponent = (
        <span className="javascriptIcon">
          <LuParentheses />
        </span>
      );
      break;
    case "CSS":
      iconComponent = (
        <span className="cssIcon">
          <FaStarOfLife />
        </span>
      );
      break;
    // Add more cases if needed
    default:
      break;
  }

  return (
    <div className={`codeEditorContainer ${isOpen ? "" : "collapsed"}`}>
      <div className="codeEditorTitleWrapper">
        <div className="codeEditorTitle">
          {iconComponent} {displayName}
        </div>
        <button
          className="codeEditorButton"
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
        >
          {isOpen ? <FaExpand /> : <FaCompress />}
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="codeMirrorWrapper"
        options={{
          lineWrapping: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
};
export default CodeEditor;
