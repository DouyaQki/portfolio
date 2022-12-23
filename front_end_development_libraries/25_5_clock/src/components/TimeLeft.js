import React from 'react'

const SESSION_LABEL = 'Session'
const BREAK_LABEL = 'Break'

let TIMELEFT_CHANGE_COLOR = {
  // this empty styles
  // will be re-written when time reaches 00:59
  // and re-stored to nothing when timeleft > 01:00
}

const TimeLeft = ({
  //get mm:ss Session
  countdownSessionMinutes,
  countdownSessionSeconds,
  // set mm:ss  Session
  setCountdownSessionMinutes,
  setCountdownSessionSeconds,
  // get mm:ss - Break
  countdownBreakMinutes,
  countdownBreakSeconds,
  // set mm:ss - Break
  setCountdownBreakMinutes,
  setCountdownBreakSeconds,
  // label
  sessionOrBreak,
}) => {
  // Acá tengo que codear el setInterval

  //* Session timer minutes ***********************************************

  //* SESSION LABEL mm:ss
  const timeLeftSessionMinutes =
    countdownSessionMinutes < 10
      ? `0${countdownSessionMinutes}`
      : countdownSessionMinutes

  const timeLeftSessionSeconds =
    countdownSessionSeconds < 10
      ? `0${countdownSessionSeconds}`
      : countdownSessionSeconds

  const timeLeftSession = `${timeLeftSessionMinutes}:${timeLeftSessionSeconds}`

  //* BREAK LABEL mm:ss
  const timeLeftBreakMinutes =
    countdownBreakMinutes < 10
      ? `0${countdownBreakMinutes}`
      : countdownBreakMinutes

  const timeLeftBreakSeconds =
    countdownBreakSeconds < 10
      ? `0${countdownBreakSeconds}`
      : countdownBreakSeconds

  const timeLeftBreak = `${timeLeftBreakMinutes}:${timeLeftBreakSeconds}`

  const timeLeftLabel = sessionOrBreak ? SESSION_LABEL : BREAK_LABEL

  const timeLeft = sessionOrBreak ? timeLeftSession : timeLeftBreak

  const countdownItsAboutToFinishedUp = countdownSessionMinutes === 0 || countdownBreakMinutes === 0
  if (countdownItsAboutToFinishedUp) {
    TIMELEFT_CHANGE_COLOR = {
      textShadow: '0 0 1rem #ff5f53, 0 0 4rem #ff5f53',
    }
  } else { // returns to normal styles
    TIMELEFT_CHANGE_COLOR = {}
  }
  
    return (
      <div className='label-and-timeleft' style={TIMELEFT_CHANGE_COLOR}>
        <h2 id='timer-label'>{timeLeftLabel}</h2>
        <h1 id='time-left'>{timeLeft}</h1>
      </div>
    )
}

export default TimeLeft
