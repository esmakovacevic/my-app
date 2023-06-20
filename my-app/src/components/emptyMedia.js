import React from 'react';
import MyButton from "./button";
import './style.css';

function EmptyMedia({ title, buttonText, titleIcon, buttonIcon, wrapperClass, titleClass, buttonClass }) {
    return (
      <div className={wrapperClass}>
        {titleIcon}
        <span className={titleClass}>{title}</span>
        <MyButton className={buttonClass}>
          {buttonIcon}
          <span className="button-bar">{buttonText}</span>
        </MyButton>
      </div>
    );
  }
  
  export default EmptyMedia;