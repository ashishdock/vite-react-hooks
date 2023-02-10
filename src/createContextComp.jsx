import React, { createContext } from 'react';
import MainComponent from './MainComponent';

export const LoginContext = createContext();
export const SecondContext = createContext();

const App = () => {
  return (
    <LoginContext.Provider value={'Hello Context!'}>
      {/* <SecondContext.Provider value2={'Hello Context2!'}> */}
      <div>
        <MainComponent />
      </div>
      {/* </SecondContext.Provider> */}
    </LoginContext.Provider>
  );
};

export default App;
// Multiple contexts do not work
