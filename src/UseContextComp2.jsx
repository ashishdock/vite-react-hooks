import { useContext } from 'react';
import { SecondContext } from './createContextComp';

const UseContextComp2 = () => {
  const value = useContext(SecondContext);
  console.log(value);
  return (
    <>
      <h3>Use Context Comp2 ${value}</h3>
    </>
  );
};

export default UseContextComp2;
