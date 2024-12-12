import "./input.css";

function Input({ label, inputAttributes }) {
  return (
    <label htmlFor={inputAttributes?.id || null}>
      {label}:
      <input {...inputAttributes} />
    </label>
  );
}

export default Input;
