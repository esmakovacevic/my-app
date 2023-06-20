import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import NavigationAll from "./navigationAll";
import NavigationDocuments from "./navigationDocuments";
import NavigationImages from "./navigationImages";
import NavigationVideos from "./navigationVideos";
import NavigationContext from "./navigationContext";
import {
  CameraVideoFill,
  FileEarmarkExcel,
  FileEarmarkFill,
  FileEarmarkPlusFill,
  ImageFill,
} from "react-bootstrap-icons";

import AddNewMediaButton from "./addNewMediaButton.";
import DisplayingFiles from "./displayingFiles";

import MyButton from "../button";

const Navigation = ({droppedFiles,loading,filesUploaded,setDroppedFiles,setLoading,handleAddMedia}) => {
  const [activeLink, setActiveLink] = useState(0);

 const navigate=useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const images = [];
  const videos = [];
  const documents = [];
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [borderStyle, setBorderStyle] = useState({});
  const [buttonText, setButtonText] = useState("Make Gallery");

  const options = [
    {
      label: "All",
      path: "/media/add/all",
      title: "Add Media",
      icon: <FileEarmarkPlusFill size={18} color="white" />,
    },
    {
      label: "Images",
      path: "/media/add/images",
      title: "Add Images",
      icon: <ImageFill size={18} color="white" />,
    },
    {
      label: "Documents",
      path: "/media/add/documents",
      title: "Add Documents",
      icon: <FileEarmarkFill size={18} color="white" />,
    },
    {
      label: "Videos",
      path: "/media/add/videos",
      title: "Add Videos",
      icon: <CameraVideoFill size={18} color="white" />,
    },
  ];

  function handleClick(index) {
    setActiveLink(index);
  }

 

  // console.log(obj);
  // const prop1 = obj.images;
  // console.log(prop1);
  // const prop2 = obj.images.allowedTypes;
  // console.log(prop2);
  // const array = obj.images.allowedTypes[1];
  // console.log(array);

 

  droppedFiles.forEach((file) => {
    if (file.type.startsWith("image/")) {
      images.push(file);
    } else if (file.type.startsWith("video/")) {
      videos.push(file);
    } else if (
      file.type.startsWith("application/pdf") ||
      file.type.startsWith("text/") ||
      file.type.startsWith("application/msword") ||
      file.type.startsWith(
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      )
    ) {
      documents.push(file);
    }
  });

  const renderFiles = () => {
    switch (activeLink) {
      case 0:
        return (
          <DisplayingFiles
            droppedFiles={droppedFiles}
            loading={loading}
            setLoading={setLoading}
            showCheckboxes={showCheckboxes}
            borderStyle={borderStyle}
            handleFileSelection={handleFileSelection}
            handleFileDeselection={handleFileDeselection}
          />
        );
      case 1:
        return (
          <DisplayingFiles
            droppedFiles={images}
            loading={loading}
            setLoading={setLoading}
            showCheckboxes={showCheckboxes}
            borderStyle={borderStyle}
            handleFileSelection={handleFileSelection}
            handleFileDeselection={handleFileDeselection}
          />
        );
      case 2:
        return (
          <DisplayingFiles
            droppedFiles={documents}
            loading={loading}
            setLoading={setLoading}
            showCheckboxes={showCheckboxes}
            borderStyle={borderStyle}
            handleFileSelection={handleFileSelection}
            handleFileDeselection={handleFileDeselection}
          />
        );
      case 3:
        return (
          <DisplayingFiles
            droppedFiles={videos}
            loading={loading}
            setLoading={setLoading}
            showCheckboxes={showCheckboxes}
            borderStyle={borderStyle}
            handleFileSelection={handleFileSelection}
            handleFileDeselection={handleFileDeselection}
          />
        );
      default:
        return null;
    }
  };
  const getTitle = () => {
    switch (activeLink) {
      case 0:
        return "Add Media";
      case 1:
        return "Add Images";
      case 2:
        return "Add Documents";
      case 3:
        return "Add Videos";
      default:
        return "";
    }
  };

  const getIcon = () => {
    switch (activeLink) {
      case 0:
        return <FileEarmarkPlusFill size={18} color="white" />;
      case 1:
        return <ImageFill size={18} color="white" />;
      case 2:
        return <FileEarmarkFill size={18} color="white" />;
      case 3:
        return <CameraVideoFill size={18} color="white" />;
      default:
        return null;
    }
  };

  const handleShowCheckboxes = () => {
    const secondButton = document.querySelector(".button-red");
    if (secondButton !== null) {
      secondButton.style.display = "block";
    }

    setBorderStyle({
      border: "5px solid #f2f2f2",
      borderRadius: "5px",
      position: "relative",
    });
    setShowCheckboxes(true);
    setButtonText("Save");
  };

  const handleHideCheckboxes = () => {
    const secondButton = document.querySelector(".button-red");
    if (secondButton !== null) {
      secondButton.style.display = "none";
    }
    setBorderStyle({ border: "none", position: "relative" });
    selectedFiles.length = 0;
    localStorage.clear();
    setShowCheckboxes(false);
    setButtonText("Make Gallery");
  };

  const handleFileSelection = (file) => {
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, file]);
  };

  useEffect(() => {
    const localSt = JSON.parse(localStorage.getItem("selectedFiles")) || [];
    setSelectedFiles(localSt);
  }, []);

  const handleFileDeselection = (id) => {
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.filter((file) => file.id !== id)
    );
    localStorage.setItem(
      "selectedFiles",
      JSON.stringify(selectedFiles.filter((file) => file.id !== id))
    );
  };

  console.log("selectedState: " + JSON.stringify(selectedFiles));
  const localSt = JSON.parse(localStorage.getItem("selectedFiles"));
  console.log("localStorage data:", JSON.stringify(localSt));

   const handleSaveButtonClick = () => {
     localStorage.setItem("selectedFiles", JSON.stringify(selectedFiles));
     navigate("/media/add/abc");
     console.log("Save button clicked!");
   };

  return (
    <NavigationContext.Provider value={{ activeLink, handleClick }}>
      <div className="navigation-wrapper">
        <div className="navigation">
          {options.map((option, index) => (
            <Link
              key={option.path}
              to={option.path}
              className={`navigation-label-2 ${
                activeLink === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {option.label}
            </Link>
          ))}

          <AddNewMediaButton
            buttonText={getTitle()}
            titleIcon={
              <FileEarmarkExcel size={150} color="rgba(23, 134, 225, 0.445)" />
            }
            buttonIcon={getIcon()}
            wrapperClass="empty-wrapper"
            titleClass="empity-title"
            buttonClass="myButton"
            handleAddMedia={handleAddMedia}
          />
          {showCheckboxes ? (
            <MyButton className="button" onClick={handleSaveButtonClick} >
              {buttonText}
            </MyButton>
          ) : (
            <MyButton className="button" onClick={handleShowCheckboxes}>
              {buttonText}
            </MyButton>
          )}

          <MyButton className="button-red" onClick={handleHideCheckboxes}>
            Give Up
          </MyButton>
        </div>
        <div className="line"></div>

        <NavigationContent
          filesUploaded={filesUploaded}
          renderFiles={renderFiles}
          handleAddMedia={handleAddMedia}
          loading={loading}
        />
      </div>
    </NavigationContext.Provider>
  );
};

const NavigationContent = ({
  filesUploaded,
  handleAddMedia,
  renderFiles,
  loading,
}) => {
  const { activeLink } = useContext(NavigationContext);

  switch (activeLink) {
    case 0:
      return (
        <NavigationAll
          filesUploaded={filesUploaded}
          renderFiles={renderFiles}
          handleAddMedia={handleAddMedia}
          loading={loading}
        />
      );
    case 1:
      return (
        <NavigationImages
          filesUploaded={filesUploaded}
          renderFiles={renderFiles}
          handleAddMedia={handleAddMedia}
          loading={loading}
        />
      );
    case 2:
      return (
        <NavigationDocuments
          filesUploaded={filesUploaded}
          renderFiles={renderFiles}
          handleAddMedia={handleAddMedia}
          loading={loading}
        />
      );
    case 3:
      return (
        <NavigationVideos
          filesUploaded={filesUploaded}
          renderFiles={renderFiles}
          handleAddMedia={handleAddMedia}
          loading={loading}
        />
      );
    default:
      return null;
  }
};

export default Navigation;
