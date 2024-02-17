import "./form-input.style.scss";
const FormInput = (props) => {
  const {
    labelName,
    type,
    isRequired,
    placeholder,
    value,
    name,
    handleChange,
  } = props;
  return (
    <div className="group">
      <input
        className="form-input"
        name={name}
        value={value}
        onChange={handleChange}
        required={isRequired}
        type={type}
        placeholder={placeholder}
      />
      <label className={`${value.length > 0 ? "shrink" : ""} form-input-label`}>
        {labelName}
      </label>
    </div>
  );
};

export default FormInput;
