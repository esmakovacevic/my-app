
import "../../components/style.css";
import { ImageFill } from "react-bootstrap-icons";

import Navigation from "../../components/AddNewMedia/navigation";
import Dropdown from '../../components/AddNewMedia/dropdownList';

import wordImg from "../../assets/word.png";
import noteImg from "../../assets/notes.png";
import excelImg from "../../assets/excel.png";
import pdfImg from "../../assets/pdf.png";
import videoImg from "../../assets/video.png";
import { useState } from "react";
const options = [
  { value: "Author", label: "Author" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

function AddMedia() {
  const [droppedFiles, setDroppedFiles] = useState([]);
  const [filesUploaded, setFilesUploaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const obj = {
    images: {
      allowedTypes: ["image/png", "image/jpg"],
      thumbnails: [],
    },
    documents: {
      allowedTypes: [
        "text/plain",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/pdf",
      ],
      thumbnails: [noteImg, wordImg, excelImg, pdfImg],
    },
    videos: {
      allowedTypes: ["video/mp4", "video/webm"],
      thumbnails: [videoImg, videoImg],
    },
  };
  let fileIdCounter = 0; 
  const handleAddMedia = (files) => {
    setLoading(true);
  
    const newFiles = files.map((file, index) => {
      let thumbnail = null;
      if (obj.documents.allowedTypes.includes(file.type)) {
        const fileTypeIndex = obj.documents.allowedTypes.indexOf(file.type);
        thumbnail = obj.documents.thumbnails[fileTypeIndex];
      } else if (obj.videos.allowedTypes.includes(file.type)) {
        const fileTypeIndex = obj.videos.allowedTypes.indexOf(file.type);
        thumbnail = obj.videos.thumbnails[fileTypeIndex];
      }

      return {
        id: fileIdCounter++,
        title: file.name,
        url: URL.createObjectURL(file),
        name: file.name,
        type: file.type,
        file,
        thumbnail,
      };
    });
    console.log("fajlovi: "+JSON.stringify( newFiles)); // console log the newFiles array
    setTimeout(() => {
      setLoading(false);
 
      
      setFilesUploaded(true);
    }, Math.floor(Math.random() * 5000) + 3000);

    setDroppedFiles((prevFiles) => [...prevFiles, ...newFiles]);

    console.log("newFiles on the end: "+JSON.stringify( newFiles));
  };
  
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const files = Array.from(event.target.elements.media.files);
  //   handleAddMedia(files);
  // };
  return (
    <div className="container-page">
      <div className="bar">
        <p className="title">
          <span className="title-font">Add New</span>
          <br /> <ImageFill size={18} color="gray" />
          <span className="media-bar">Media</span>
        </p>
  
      </div>
      <div className="dropdown-wrapper">
        <Dropdown options={options} />
      </div>
      <Navigation handleAddMedia={handleAddMedia} loading={loading} droppedFiles={droppedFiles} filesUploaded={filesUploaded} 
      setDroppedFiles={setDroppedFiles} setFilesUploaded={setFilesUploaded} setLoading={setLoading}/>
    
    </div>
  );
}
export default AddMedia;
