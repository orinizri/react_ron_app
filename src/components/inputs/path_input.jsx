function Input({ label, initialValue }) {
  return (
    <label>
      {label}: <input name={label} initialvalue={initialValue} />
    </label>
  );
}

export default Input;
