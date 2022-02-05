import React, {useContext} from 'react';
import { Context } from "./Context";

function ComponentB() {
  const [context, setContext] = useContext(Context);
  return (
    <div>ComponentB: {context}</div>
  );
}

export default ComponentB;
