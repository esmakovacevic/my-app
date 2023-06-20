import React, { useState } from "react";
import "../../components/style.css";
import MyButton from "../../components/button";
import { BorderWidth, BoxArrowDown, FileEarmarkRichtextFill } from "react-bootstrap-icons";
import InputField from "../../components/AddNewContent/inputField";


import EditorIndtroduction from "../../components/AddNewContent/editorIntroduction";
import EditorText from "../../components/AddNewContent/editorText";

function Add() {

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [editorIndtroduction, setEditorIntroduction] = useState("");
  const [editorText, setEditorText] = useState("");
  const [author, setAuthor] = useState("");

  const handleButtonClick = () => {
    const data = {
      title: title,
      subtitle: subtitle,
      Introduction: editorIndtroduction,
      Text: editorText,
      author: author,
    };
    const jsonObject = JSON.stringify(data);
    console.log(jsonObject);
  };


  return (
    <div className="container-page">
      <div className="bar">
        <p className="title">
          <span className="title-font">Add New</span>
          <br />
          <FileEarmarkRichtextFill size={18} color="gray" />
          <span className="media-bar">Content</span>
        </p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <MyButton className="buttonContent" onClick={handleButtonClick}>
       
            <BoxArrowDown size={17} color="white" />
            <span className="button-bar">Save changes</span>
         
          </MyButton>
        </div>
      </div>

      <div className="media-wrapper">
        <div className="textComponent">
          <div className="text-wrapper">
            <form>
              <InputField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <InputField
                label="Subtitle"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
              <label>Introduction:</label>
              <EditorIndtroduction initialValue={editorIndtroduction} onChange={(content) => setEditorIntroduction(content)}/>
              <label>Text:</label>
             <EditorText initialValue={editorText} onChange={(content) => setEditorText(content)}/>
            </form>
          </div>
        </div>

        <div className="optionsComponent">
         
            <form>
              <div className="opt-wrap">
                <BorderWidth size={22} color="gray"/>
              <label className="opt-title">Options</label>
              </div>
              <div className="line"></div>
              <div  className="options-wrapper">
              <label>Categories</label>
              <InputField
                label="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              </div>
            </form>
          
        </div>
      </div>
    </div>
  );
}

export default Add;
