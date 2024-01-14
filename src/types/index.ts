export type CodeEditorProps = {
    language: string;
    displayName: string;
    value: string;
    onChange: (value: string) => void;
  };