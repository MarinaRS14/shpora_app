import React, {useState} from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import {Context} from './Context';

function MainComponent() {
  const [context, setContext] = useState("default context value");
  return (
    <Context.Provider value={[context, setContext]}>
      <ComponentA />
      <ComponentB />
    </Context.Provider>
  );
}

export default MainComponent;
