import "../style.css";

const InputField = ({ label, name,value,onChange,className='input-field'}) => {
  return (
    <div>
      <label htmlFor={name} >{label}:</label>
      <input type="text" id={name} name={name} value={value} onChange={onChange}  className={className} />
    </div>
  );
};

export default InputField;