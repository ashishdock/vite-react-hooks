import React, { useState, useReducer } from 'react';

const ACTION = {
  INCREASE: 'increase',
  DECREASE: 'decrease',
  INCREASE2: 'increase2',
  DECREASE2: 'decrease2',
};

const initialState = { count: 0, count2: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREASE:
      console.log(action);
      return { count: state.count + 1, count2: state.count2 };
      break;
    case ACTION.DECREASE:
      console.log(action);
      return { count: state.count - 1, count2: state.count2 };
      break;
    case ACTION.INCREASE2:
      console.log(action);
      return { count: state.count, count2: state.count2 + 1 };
      break;
    case ACTION.DECREASE2:
      console.log(action);
      return { count: state.count, count2: state.count2 - 1 };
      break;
    default:
      return state;
      break;
  }
};

const UseReducerRoute = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [count, setCount] = useState(0);

  const increaseCount = () => {
    dispatch({ type: ACTION.INCREASE });
  };

  const decreaseCount = () => {
    dispatch({ type: ACTION.DECREASE });
  };

  const increaseCount2 = () => {
    dispatch({ type: ACTION.INCREASE2 });
  };

  const decreaseCount2 = () => {
    dispatch({ type: ACTION.DECREASE2 });
  };

  return (
    <div>
      <h2>State 1 = {state.count}</h2>
      <h2>State 2 = {state.count2}</h2>
      <button onClick={increaseCount}>Increase State 1</button>
      <button onClick={decreaseCount}>Decrease State 1</button>
      <button onClick={increaseCount2}>Increase State 2</button>
      <button onClick={decreaseCount2}>Decrease State 2</button>
    </div>
  );
};

export default UseReducerRoute;
