import React from 'react'
import { SECONDS_DEFAULT } from '../App'

const Session = ({
  // play o pausa?
  countdownStatus,
  // get session mm
  sessionLengthMinutes,
  // set session mm
  setSessionLengthMinutes,
  // get ss
  countdownSessionSeconds,
  // set ss
  setCountdownSessionSeconds,
  //timeleft session < 1
  countdownSessionMinutes,
  setCountdownSessionMinutes,
}) => {
  const handleDecrement = () => {
    // Está andando, pues no hagas nada.
    if (countdownStatus) return

    if(countdownSessionMinutes === 0) {
      setCountdownSessionMinutes(1)
      setCountdownSessionSeconds(SECONDS_DEFAULT)
      return
    }

    if(sessionLengthMinutes <= 1) return

    if (countdownSessionSeconds !== 0)
      setCountdownSessionSeconds(SECONDS_DEFAULT)

    // Ahora puede restar.
    setSessionLengthMinutes((prev) => prev - 1)
  }

  const handleIncrement = () => {
    // Está andando
    if (countdownStatus) return

    if (sessionLengthMinutes >= 60) return

    if (countdownSessionSeconds !== 0)
      setCountdownSessionSeconds(SECONDS_DEFAULT)

    // Ahora puede sumar.
    setSessionLengthMinutes((prev) => prev + 1)
  }

  return (
    <div className='length-box'>
      <h2 id='session-label'>Session Length</h2>
      <section className='general-controls'>
        <div
          id='session-decrement'
          onClick={handleDecrement}
          className='decrement-increment-buttons'
        >
          -
        </div>
        <p id='session-length'>{sessionLengthMinutes}</p>
        <div
          id='session-increment'
          onClick={handleIncrement}
          className='decrement-increment-buttons'
        >
          +
        </div>
      </section>
    </div>
  )
}

export default Session
