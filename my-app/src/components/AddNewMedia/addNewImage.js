
const AddNewImage = (files) => {

    const newFiles = files.map((file) => ({
      id: file.name,
      title: file.name,
      url: URL.createObjectURL(file),
      name: file.name,
      type:file.type,
      file,
  
    }));

    return newFiles;
  };
  
  export default AddNewImage;