import React from "react";
import "./style.css";
import PopupWindow from "./popupWindow";

function UploadedFiles({ files, onClickHandler }) {
  return (
    <div className="files-wrapper">
      {files.map((file, index) => (
        <img
          key={index}
          className="image"
          src={URL.createObjectURL(file.file)}
          alt={file.name}
          onClick={() => onClickHandler(file)}
        />
      ))}
    </div>
  );
}

function FileViewer({ files, selectedFile, onFileClick, onClose }) {
  return (
    <>
      <UploadedFiles files={files} onClickHandler={onFileClick} />
      {selectedFile && (
        <PopupWindow
          id={selectedFile.id}
          title={selectedFile.title}
          type={selectedFile.type}
          name={selectedFile.name}
          file={selectedFile.file}
          onClose={onClose}
        />
      )}
    </>
  );
}

export default FileViewer;
