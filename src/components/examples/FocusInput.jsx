import { Button, Space } from 'antd';
import React, { useRef } from 'react';

function FocusInput() {
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }
  return (
    <div>
      <Space>
        <input type="text" ref={textInput} />
        <Button type="primary" onClick={handleClick}>Фокус на поле для ввода текста</Button>  
      </Space>
      
    </div>
  );
}

export default FocusInput;
