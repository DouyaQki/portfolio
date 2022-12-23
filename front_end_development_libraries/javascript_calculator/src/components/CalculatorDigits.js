import React from 'react'

const CalculatorButtons = ({
  handleInputNumbers,
  handleClear,
  handleOperator,
}) => {
  return (
    <>
      <button id='zero' onClick={handleInputNumbers}>
        0
      </button>
      <button id='one' onClick={handleInputNumbers}>
        1
      </button>
      <button id='two' onClick={handleInputNumbers}>
        2
      </button>
      <button id='three' onClick={handleInputNumbers}>
        3
      </button>
      <button id='four' onClick={handleInputNumbers}>
        4
      </button>
      <button id='five' onClick={handleInputNumbers}>
        5
      </button>
      <button id='six' onClick={handleInputNumbers}>
        6
      </button>
      <button id='seven' onClick={handleInputNumbers}>
        7
      </button>
      <button id='eight' onClick={handleInputNumbers}>
        8
      </button>
      <button id='nine' onClick={handleInputNumbers}>
        9
      </button>
      
      {/* OPERATORS */}
      <button id='add' onClick={handleInputNumbers}>
        +
      </button>
      <button id='subtract' onClick={handleInputNumbers}>
        -
      </button>
      <button id='multiply' onClick={handleInputNumbers}>
        *
      </button>
      <button id='divide' onClick={handleInputNumbers}>
        /
      </button>
      {/* DECIMAL */}
      <button id='decimal' onClick={handleInputNumbers}>
        .
      </button>
      {/* CLEAR */}
      <button id='clear' onClick={handleClear}>
        AC
      </button>
      {/* EQUALS */}
      <button id='equals' onClick={handleOperator}>
        =
      </button>
    </>
  )
}

export default CalculatorButtons
