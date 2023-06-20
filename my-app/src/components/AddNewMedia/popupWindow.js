import React from 'react';
import '../style.css'
function PopupWindow({ id, title, type, name, file, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{title}</h2>
        <p>ID: {id}</p>
        <p>Type: {type}</p>
        <p>Name: {name}</p>
        <p>File Size: {file.size}</p>
        <p>Last Modified: {file.lastModifiedDate.toLocaleDateString()}</p>
        <div className="file-preview">
          <img src={URL.createObjectURL(file)} alt={name} />
        </div>
      </div>
    </div>
  );
}

export default PopupWindow;
