
import DisplayImages from "./displayImage";

const DisplayingFiles=({droppedFiles,loading,setLoading,showCheckboxes,borderStyle,handleFileSelection,handleFileDeselection})=>{
 

  return(
    <div className="files-wrapper">
    {droppedFiles.length > 0 && 
      droppedFiles.map((file,index) => (
        <DisplayImages
          key={index}
          id={file.id}
          title={file.title}
          url={file.url}
          type={file.type}
          file={file.file}
          thumbnail={file.thumbnail}
          loading={loading}
          setLoading={setLoading}
          showCheckboxes={showCheckboxes}
          borderStyle={borderStyle}
          handleFileSelection={handleFileSelection}
          handleFileDeselection ={handleFileDeselection}
        />
      ))}

  </div>
  )
  }
  export default DisplayingFiles;