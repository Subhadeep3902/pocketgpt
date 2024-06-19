import React, { useState, DragEvent } from "react";
import { BiImageAdd, BiX } from "react-icons/bi";

interface FileInputModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FileInputModal: React.FC<FileInputModalProps> = ({ isOpen, onClose }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFiles = (newFiles: FileList) => {
    setFile(newFiles[0]);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      handleFiles(event.target.files);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 p-6 rounded-2xl relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
          onClick={onClose}
        >
          <BiX size={30} />
        </button>
        <div
          className="p-10 md:p-16 md:px-52 flex flex-col items-center justify-center gap-3  rounded-md"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <BiImageAdd size={100} className="text-gray-400" />
          <p className="text-gray-400">Drag photo here</p>
          <p className="text-gray-400">SVG, PNG, JPG</p>
          <button
            className="bg-red-500 text-white text-lg px-4 py-2 mt-2 rounded-full"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            Select from computer
          </button>
          <input
            id="fileInput"
            type="file"
            accept="image/svg+xml, image/png, image/jpeg"
            className="hidden"
            onChange={handleFileInputChange}
          />
        </div>
        {file && (
          <div className="text-center">
            <h3 className="text-white">Selected File:</h3>
            <div className="mt-2 flex items-center justify-center gap-2 pl-5">
              <h3 className="text-white">{file.name}</h3>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={removeFile}
              >
                <BiX size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileInputModal;
