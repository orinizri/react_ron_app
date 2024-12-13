function Button({ content, type, disabled, onClick }) {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
