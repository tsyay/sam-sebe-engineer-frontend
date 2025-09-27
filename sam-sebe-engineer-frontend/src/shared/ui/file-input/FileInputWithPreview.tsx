import { useState } from "react";

type FileInputWithPreviewProps = {
  file: File | null;
  onFileChange: (file: File | null) => void;
};

export const FileInputWithPreview = ({ file, onFileChange }: FileInputWithPreviewProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    onFileChange(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="w-full h-full">
      <label className="cursor-pointer w-full h-full bg-gray-200 flex items-center justify-center overflow-hidden rounded-[30px]">
        {preview ? (
          <img src={preview} alt="Preview"   className="max-w-full max-h-full object-contain"
 />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a1 1 0 001 1h14a1 1 0 001-1v-1M12 4v12m0 0l-4-4m4 4l4-4" />
          </svg>
        )}
        <input type="file" className="hidden" onChange={handleChange} />
      </label>
    </div>
  );
};
