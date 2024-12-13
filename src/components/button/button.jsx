function Button({ content, type, disabled }) {
  return (
    <button type={type} disabled={disabled}>
      {content}
    </button>
  );
}

export default Button;
