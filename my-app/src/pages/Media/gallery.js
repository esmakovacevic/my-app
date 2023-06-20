import { useEffect, useState } from "react";
import { ImageFill } from "react-bootstrap-icons";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const localSt = JSON.parse(localStorage.getItem("selectedFiles"));
    setPhotos(localSt);
  }, []);



  

  const arrayMove = (array, fromIndex, toIndex) => {
    const newArray = [...array];
    const [item] = newArray.splice(fromIndex, 1);
    newArray.splice(toIndex, 0, item);
    return newArray;
  };
  
  const SortableImage = SortableElement(({ file }) => (
    <div key={file.id}>
      <img src={file.url} alt={file.name} className="image" key={file.id} />
    </div>
  ));
  
  const SortableGallery = SortableContainer(({ items }) => {
    return (
      <div className="files-wrapper-gallery">
        {items.map((file, index) => (
          <SortableImage key={file.id} index={index} file={file} />
        ))}
      </div>
    );
  });
  
  // Render the component as follows
  return (
    <div className="container-page">
      <div className="bar">
        <p className="title">
          <span className="title-font">View</span>
          <br /> <ImageFill size={18} color="gray" />
          <span className="media-bar">Gallery</span>
        </p>
      </div>
      <div className="navigation-wrapper">
      {photos && photos.length > 0 ? (
          <SortableGallery
            items={photos}
            onSortEnd={({ oldIndex, newIndex }) => {
              setPhotos(arrayMove(photos, oldIndex, newIndex));
            }}
            axis="xy"
            helperClass="dragging-helper"
          />
        ) : (
          <div className="empty-gallery-message">
            <p>No photos to display</p>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default Gallery;
