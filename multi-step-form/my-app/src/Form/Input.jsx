const Input = ({ labelName, id, value, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <input
        name={id}
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default Input;
