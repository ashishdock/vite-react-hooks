import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const textRef = useRef();

  useLayoutEffect(() => {
    console.log('useEffect');
    if (textRef.current != null) {
      const dimension = textRef.current.getBoundingClientRect();
      textRef.current.style.paddingTop = `${dimension.height}px`;
      console.log(dimension);
    }
  }, [toggle]);

  //   useLayoutEffect(() => {
  //     console.log('useLayoutEffect');
  //   }, [toggle]);

  return (
    <>
      <h1> Use LayoutEffect</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h4 ref={textRef}> Ashish React</h4>}
    </>
  );
};

export default App;
