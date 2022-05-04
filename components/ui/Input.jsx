export default function Input({
  name,
  type,
  value,
  labelText,
  style,
  showContent,
  ...rest
}) {
  return (
    <input
      className='input'
      value={value}
      type={type}
      id={name}
      name={name}
      {...rest}
    />
  );
}
