import React from 'react';

export default function TextInput({
  name,
  type,
  value,
  labelText,
  style,
  showContent,
  ...rest
}) {
  return (
    <textarea
      className='textInput'
      rows='7'
      value={value}
      type={type}
      id={name}
      name={name}
      {...rest}
    ></textarea>
  );
}
