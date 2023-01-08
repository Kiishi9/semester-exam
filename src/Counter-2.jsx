import React from "react";
import useNormalCounter from "./NormalCustom";
import { Link } from "react-router-dom";

const Counter_2 = () => {
  const [count, increment, decrement, reset, setValue] = useNormalCounter();
  return (
    <div className="counter_2">
      <div className="counter-wrapper">
        <div className="counter">
          <div className="value">
            <h1> {count} </h1>
          </div>

          <div className="button">
            <button onClick={increment}> Increment</button>
            <button onClick={decrement}> Decrement</button>
            <button onClick={reset}> Reset</button>
            <input
              type="number"
              name="setValue"
              onChange={(e) => setValue(e)}
            />
          </div>

          <div className="link">
            <Link className="links" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter_2;
