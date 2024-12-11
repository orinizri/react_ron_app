import "./input.css";

function Input({ label, inputAttributes }) {
  return (
    <>
      <label htmlFor={inputAttributes?.id || null}>{label}:</label>
      <input {...inputAttributes} />
    </>
  );
}

export default Input;
