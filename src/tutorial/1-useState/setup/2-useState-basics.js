import React, { useState } from 'react';

// Use
// component name must be uppercase (UseStateBasics)
// must be in the function/component body (const [text, setText] = useState('hello john');)
// cannot call conditionally
const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState('hello john');
  const handleClick = () => {
    if (text === 'hello john') {
      setText('welcome to your app');
    } else {
      setText('hello john');
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        say hello
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
