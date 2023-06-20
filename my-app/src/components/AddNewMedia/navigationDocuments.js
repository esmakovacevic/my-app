import React, { useContext} from "react";
import { FileEarmarkExcel, FileEarmarkFill, } from "react-bootstrap-icons";
import NavigationContext from "./navigationContext";
import AddNewMediaButton from "./addNewMediaButton.";
import '../style.css';

const NavigationDocuments = ({
  filesUploaded,
  handleAddMedia,
  renderFiles,
  loading
}) => {
  const { activeLink } = useContext(NavigationContext);

  const handleDrag = (e) => {
    e.preventDefault();
  };



  return (
    <div className={`content ${activeLink === 2 ? "active" : ""}`}>
      {!filesUploaded && !loading &&(
        <div className="nav-wrapper">
          <div
            className="drag-and-drop"
            onDragOver={handleDrag}
            onDrop={(e) => {
              e.preventDefault();
              handleAddMedia(Array.from(e.dataTransfer.files));
            }}
          >
            Drop files here
          </div>
          <AddNewMediaButton
            buttonText="Add new documents"
            titleIcon={
              <FileEarmarkExcel size={150} color="rgba(23, 134, 225, 0.445)" />
            }
            buttonIcon={<FileEarmarkFill size={18} color="white" />}
            wrapperClass="empty-wrapper"
            titleClass="empity-title"
            buttonClass="myButton-2"
          />
        </div>
      )}
{loading && !filesUploaded && <p>Loading...</p>}
      {filesUploaded && renderFiles()}
    </div>
  );
};

export default NavigationDocuments;
