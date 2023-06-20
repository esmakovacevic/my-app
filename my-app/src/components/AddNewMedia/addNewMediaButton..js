import React from "react";
import MyButton from "../button";


import '../style.css'
function AddNewMediaButton({ buttonText, buttonIcon, buttonClass,handleAddMedia}) {
 


  return (
    <>
    
      <MyButton
        className={buttonClass}
        onClick={() => {
          document.getElementById("mediaInput").click();
        }}
      >
        {buttonIcon}
        <span className="button-bar">{buttonText}</span>
      </MyButton>
      <input
        id="mediaInput"
        type="file"
        onChange={(e) =>{const file=Array.from(e.target.files); handleAddMedia(file) }}
        className="input"
        multiple
      />
      
    </>
  );
}

export default AddNewMediaButton;
