import React, { useCallback, useState, useEffect } from 'react';
import PrintTable from './PrintTable';

const App = () => {
  const [number, setNumber] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const calculateTable = useCallback(() => {
    return [number * 1, number * 2, number * 3, number * 4, number * 5];
  }, [number]);

  const cssStyle = {
    backgroundColor: darkTheme ? 'black' : 'white',
    color: darkTheme ? 'white' : 'black',
  };

  //   const calculateTable = () => {
  //     return [number * 1, number * 2, number * 3, number * 4, number * 5];
  //   };
  // when we are not using useCallback, this is being rerendered even when only toogle theme is called.

  return (
    <div style={cssStyle}>
      <input
        onChange={(e) => setNumber(e.target.valueAsNumber)}
        type="number"
        value={number}
      />
      <PrintTable calculateTable={calculateTable} />
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle theme</button>
    </div>
  );
};

export default App;
