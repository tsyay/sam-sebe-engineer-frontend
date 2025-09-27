import { useState } from "react";

type FileInputProps = {
  onFileSelect: (file: File | null) => void;
};

export const FileInputWithLogo = ({ onFileSelect }: FileInputProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file?.name || null);
    onFileSelect(file);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <label className="cursor-pointer w-12 h-12 bg-blue-500 rounded flex items-center justify-center hover:bg-blue-600">
        <input type="file" className="hidden" onChange={handleChange} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a1 1 0 001 1h14a1 1 0 001-1v-1M12 4v12m0 0l-4-4m4 4l4-4" />
        </svg>
      </label>

      {fileName && (
        <span className="text-gray-700 text-sm truncate max-w-xs">{fileName}</span>
      )}
    </div>
  );
};
