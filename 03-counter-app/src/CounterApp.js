import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {
  const [suma, setSuma] = useState(value)

  //handleAdd
  
  const handleAdd = () => {
    setSuma(suma + 1);
    // setSuma((suma) => suma + 1)
  }

  const handleSubtract = () => {
    setSuma(suma - 1);
  }

  const handleReset = () => {
    setSuma(value);
  }

  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{suma}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-1</button>
    </div>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp;