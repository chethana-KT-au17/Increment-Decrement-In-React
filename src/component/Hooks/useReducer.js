import React, { useReducer } from "react";
import "./style.css";
import  { useState } from 'react';


const reducer = (state, action) => {
    if(action.type === "INCR"){
        state = state + 1;    
    }

    if( state > 0 && action.type === "DRCE"){
        state = state - 1;    
    }
    return state;
};

const UseReducer = () => {
  // const initialData = 15;
//   const [myNum, setMyNum] = useState(0);
  // console.log(myNum);
    const initialData = 10
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({type:"INCR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() => dispatch({type:"DRCE"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseReducer;