import React, {  useState } from "react";
import "../style.css";

function DisplayImages({
  id,
  title,
  url,
  type,
  loading,
  thumbnail,
  showCheckboxes,
  borderStyle,
  handleFileDeselection,
  handleFileSelection
}) {
  const [showDetails, setShowDetails] = useState(false);


  const handleClick = () => {
    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
  };
  
  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      const file = { id, title, url, type };
      handleFileSelection(file);
    } else {
      handleFileDeselection(id);
    }
  };
  
  //console.log( JSON.parse(localStorage.getItem("selectedFiles")))

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {thumbnail ? (
            <div style={borderStyle}>
              {showCheckboxes && (
                <input
                  type="checkbox"
                  className="checkBox"
                  onChange={handleCheckboxChange}
                />
              )}
              <img
                className="image"
                key={id}
                alt={`${title} thumbnail`}
                src={thumbnail}
                onClick={handleClick}
              />
            </div>
          ) : (
            <div style={borderStyle}>
              {showCheckboxes && (
                <input
                  type="checkbox"
                  className="checkBox"
                  onChange={handleCheckboxChange}
                />
              )}
              <img
                className="image"
                key={id}
                alt={title}
                src={url}
                onClick={handleClick}
              />
            </div>
          )}
        </>
      )}

      {showDetails && (
        <div className="popup-window">
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <h2>File Details</h2>
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={title}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              <img
                src={url}
                alt={title}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            )}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <p>ID: {id}</p>
            <p>Name: {title}</p>
            <p>Type:{type}</p>
            <p>Date Modified: {new Date().toLocaleString()}</p>

            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayImages;
