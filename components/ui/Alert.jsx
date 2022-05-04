import { useState } from 'react';

export default function Alert({ message, hide, setHide }) {
  function clickHandle() {
    setHide(true);
  }

  return (
    <div
      className={`alert ${hide && 'hide'}`}
      style={{ background: message === 'form submit failed' && 'red' }}
    >
      <div className='alert__left'>
        <p>{message}</p>
      </div>
      <div className='alert__right'>
        <button onClick={clickHandle} type='button'>
          Close
        </button>
      </div>
    </div>
  );
}
