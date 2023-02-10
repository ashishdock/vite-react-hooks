import React, { useContext } from 'react';
import { LoginContext } from './createContextComp';
import AnotherFiller from './AnotherFiller';

const UseContextComp = () => {
  const login = useContext(LoginContext);
  console.log(login);
  return (
    <>
      <h1>
        Testing useContextComp <br />
        <span>${login}</span>
      </h1>
      <AnotherFiller />
    </>
  );
};

export default UseContextComp;
