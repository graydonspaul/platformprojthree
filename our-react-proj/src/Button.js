
import React, { useState } from 'react';

function Button() {
  const [value, setValue] = useState(100); // Initial value is set to 10

  const decreaseValue = () => {
    setValue(prevValue => prevValue - 1); // Decrease the value by 1
  };

  return (
    <div>
      <p>Meals Left: {value}</p>
      <button onClick={decreaseValue}>
        Click Me when you use a meal 
      </button>
    </div>
  );
}


export default Button;
