import React, {useContext} from 'react';
import {Context} from './Context';
import { Button } from 'antd';

function ComponentA() {
    const [, setContext] = useContext(Context);
  return (
    <div>
      ComponentA:
      <Button type="primary" onClick={() => setContext("New Value")}>
        Change Context Value
      </Button>
    </div>
  );
}

export default ComponentA;


