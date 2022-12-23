import React, { useState, useEffect } from 'react'
import './App.css'
import { evaluate } from 'mathjs'
import CalculatorDigits from './components/CalculatorDigits'
import spaceOperator from './separateTheOperator'
import Display from './components/Display'

const App = () => {
  const [displayTop, setDisplayTop] = useState('')
  const [displayBottom, setDisplayBottom] = useState('')
  const [clearDisplay] = useState('0')

  const handleInputNumbers = (e) => {
    const pressedInput = e.target.innerText
    const nextInput = displayBottom + pressedInput
    const prevAndPressedInput = (prev) => prev + pressedInput

    //REGEX
    // ------------------------------------------------------------->
    // ------------------------------------------------------------->
    const HAS_OR_STARTS_WITH_DOTS = /\.\d+\.|\.{2}/g.test(nextInput)
    const STARTS_WITH_OPERATOR = /^[+*/]|^-{2}/g.test(nextInput)
    const FIRST_INPUT_IS_DOT =
      displayBottom.length === 0 && pressedInput === '.'

    const FIRST_INPUT_IS_DIGIT =
      displayBottom.length === 0 && /^[0-9]/.test(pressedInput)

    const PRESSED_ZERO_AND_DOT = /^0\./.test(nextInput)

    const FIRST_INPUT_IS_MINUS =
      displayBottom.length === 0 && pressedInput === '-'

    const START_WITH_ZERO_AND_NEXT_INPUT_IS_NOT_DOT =
      displayBottom.length === 1 &&
      displayBottom === '0' &&
      pressedInput !== '.' &&
      !/[+/*-]/.test(nextInput)

    const FIRST_DIGIT_IS_NOT_ZERO =
      displayBottom.length >= 1 && !/^0/.test(nextInput)

    const THERE_IS_CHAIN_OF_OPERATORS = /[/*+]{2}$/.test(nextInput)
    const MINUS_BETWEEN_OPERATORS = /[/*+]{1}-{1,}[/*+]$/.test(nextInput)
    const TOO_MANY_MINUS = /[/*+]+-{2}$|\d+-{3}$/.test(nextInput)
    const MINUS_AND_DOT_OPERATOR = /\.-$|-\.$|[/*-+]\.$/.test(nextInput)
    const DOT_AND_MINUS = /(\d+)?\.[/*-+]$/.test(nextInput)
    const TWICE_MINUS_AND_OPERATOR = /--[/*+]/.test(nextInput)

    // EXCEPTIONS
    // ------------------------------------------------------------->
    // ------------------------------------------------------------->
    if (displayBottom.length >= 16) return
    if (TWICE_MINUS_AND_OPERATOR) return
    if (MINUS_AND_DOT_OPERATOR) return
    if (DOT_AND_MINUS) return
    if (TOO_MANY_MINUS) return

    if (THERE_IS_CHAIN_OF_OPERATORS) {
      setDisplayBottom(displayBottom.replace(/[/*+]$/, pressedInput))
      return
    }

    if (MINUS_BETWEEN_OPERATORS) {
      setDisplayBottom(displayBottom.replace(/[/*+]{1}-{1,}$/, pressedInput))
      return
    }

    if (HAS_OR_STARTS_WITH_DOTS || STARTS_WITH_OPERATOR) return

    if (FIRST_INPUT_IS_DOT || FIRST_INPUT_IS_MINUS) {
      if (FIRST_INPUT_IS_MINUS) {
        setDisplayBottom('-')
        return
      }
      setDisplayBottom('0.')
      return
    }

    if (PRESSED_ZERO_AND_DOT) {
      setDisplayBottom(prevAndPressedInput)
    }

    if (FIRST_INPUT_IS_DIGIT) {
      setDisplayBottom(pressedInput)
      return
    }

    if (START_WITH_ZERO_AND_NEXT_INPUT_IS_NOT_DOT) {
      setDisplayBottom(pressedInput)
      return
    }

    if (FIRST_DIGIT_IS_NOT_ZERO) {
      setDisplayBottom(prevAndPressedInput)
      return
    }
  }

  const handleOperator = () => {
    const DISPLAY_FINISHES_WITH_OPERATORS_OR_DOTS = /[/*-+.]+$|-{1,}$/.test(
      displayBottom
    )

    if (displayBottom === '') return
    if (DISPLAY_FINISHES_WITH_OPERATORS_OR_DOTS) return

    setDisplayTop(displayBottom)
    setDisplayBottom(`${evaluate(displayBottom)}`)
  }

  useEffect(() => {}, [displayTop, displayBottom])

  const handleClear = () => {
    setDisplayTop('')
    setDisplayBottom('')
  }

  let displayFormula = [...displayTop].map(spaceOperator).join('')

  const DOUBLE_MINUS = /\d--\d/.test(displayFormula)
  const SINGLE_MINUS = /\d-\d/.test(displayFormula)

  if (DOUBLE_MINUS) {
    setDisplayTop(displayTop.replaceAll('--', ' - -'))
  }

  if (SINGLE_MINUS) {
    setDisplayTop(displayTop.replaceAll('-', ' - '))
  }

  return (
    <div className='calculator-grid-box'>
      <Display
        displayFormula={displayFormula}
        displayBottom={displayBottom}
        clearDisplay={clearDisplay}
      />
      <CalculatorDigits
        handleInputNumbers={handleInputNumbers}
        handleClear={handleClear}
        handleOperator={handleOperator}
      />
    </div>
  )
}

export default App
