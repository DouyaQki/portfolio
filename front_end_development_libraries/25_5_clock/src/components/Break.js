import React from 'react'
import { SECONDS_DEFAULT } from '../App'

const Break = ({
  // play o pausa?
  countdownStatus,
  // get break mm
  breakLengthMinutes,
  // set break mm
  setBreakLengthMinutes,
  // get ss
  countdownBreakSeconds,
  // set ss
  setCountdownBreakSeconds,
  // break min < 0
  countdownBreakMinutes,
  setCountdownBreakMinutes
}) => {
  const handleDecrement = () => {
    // Está andando
    if(countdownStatus) return

    if(countdownBreakMinutes === 0) {
      setCountdownBreakMinutes(1)
      setCountdownBreakSeconds(SECONDS_DEFAULT)
      return
    }

    if(breakLengthMinutes <= 1) return

    if (countdownBreakSeconds !== 0) setCountdownBreakSeconds(SECONDS_DEFAULT)

    // Ahora puede restar.
    setBreakLengthMinutes(prev => prev - 1)
  }

  const handleIncrement = () => {
        // Está andando
        if(countdownStatus) return

        if(breakLengthMinutes >= 60) return
    
        if (countdownBreakSeconds !== 0) setCountdownBreakSeconds(SECONDS_DEFAULT)
    
        // Ahora puede restar.
        setBreakLengthMinutes(prev => prev + 1)
  }

  return (
    <div className='length-box'>
      <h2 id='break-label'>Break Length</h2>
      <section className='general-controls'>
        <div id='break-decrement' className='decrement-increment-buttons' onClick={handleDecrement}>
          -
        </div>
        {/* ACÁ VA EL NÚMERO DEL CONTADOR PARA BREAK */}
        <p id='break-length'>{breakLengthMinutes}</p>
        <div id='break-increment' className='decrement-increment-buttons' onClick={handleIncrement}>
          +
        </div>
      </section>
    </div>
  )
}

export default Break
