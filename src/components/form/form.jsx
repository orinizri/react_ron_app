function Form({ controls, onSubmit }) {
  return <form onSubmit={onSubmit}>{controls}</form>;
}

export default Form;
