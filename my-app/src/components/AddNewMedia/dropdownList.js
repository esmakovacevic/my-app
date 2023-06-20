import React from "react";
import Select from "react-select";
import "../style.css";

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: 10,
    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.17)",
    border: "none",
  }),
};

const Dropdown = ({ options, className = "dropdown", ...props }) => {
  return (
    <Select
      className={className}
      styles={customStyles}
      options={options}
      {...props}
    />
  );
};

export default Dropdown;
