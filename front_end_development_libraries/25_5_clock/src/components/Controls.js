import React from 'react'
import {
  SESSION_LENGTH_DEFAULT,
  BREAK_LENGTH_DEFAULT,
  SECONDS_DEFAULT,
} from '../App'

const Controls = ({
  setCountdownStatus,
  setSessionOrBreak,
  // length
  setBreakLengthMinutes,
  setSessionLengthMinutes,
  // countdown
  setCountdownBreakMinutes,
  setCountdownBreakSeconds,
  setCountdownSessionMinutes,
  setCountdownSessionSeconds,
  audioRef
}) => {
  const handleReset = () => {
    setCountdownStatus(false)
    setSessionOrBreak(true)
    setBreakLengthMinutes(BREAK_LENGTH_DEFAULT)
    setSessionLengthMinutes(SESSION_LENGTH_DEFAULT)

    setCountdownSessionMinutes(SESSION_LENGTH_DEFAULT)
    setCountdownSessionSeconds(SECONDS_DEFAULT)

    audioRef.current.pause()
    audioRef.current.currentTime = 0
  }

  const handleStartPause = () => setCountdownStatus(prev => !prev)

  return (
    <div className='start-pause-reset-box'>
      <div id='start_stop' className='play-pause-reset' onClick={handleStartPause}>
        Play-Pause
      </div>
      <div id='reset' className='play-pause-reset' onClick={handleReset}>
        Reset
      </div>
    </div>
  )
}

export default Controls
