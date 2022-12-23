import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import Break from './components/Break'
import Controls from './components/Controls'
import Session from './components/Session'
import TimeLeft from './components/TimeLeft'

const AUDIO_SRC =
  'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'

export const SESSION_LENGTH_DEFAULT = 25
export const BREAK_LENGTH_DEFAULT = 5

export const SECONDS_DEFAULT = 0
const COUNTDOWN_SECONDS_RESTART = 59
const MINIMUM_TIME = 1

// const audio = new Audio(AUDIO_SRC)

const App = () => {
  const audioRef = useRef()

  //* play: true | pausa: false
  const [countdownStatus, setCountdownStatus] = useState(false)
  const [firstTime, setFirstTime] = useState(true)

  // Es el turno de session/break para retroceder.
  // true: session | false: break
  //* SESSION OR BREAK ?
  // session: true (por defecto cuando estoy testeando)
  // break: false
  const [sessionOrBreak, setSessionOrBreak] = useState(true)

  // Establece los minutos de cada length.
  //* LENGTH
  const [breakLengthMinutes, setBreakLengthMinutes] =
    useState(BREAK_LENGTH_DEFAULT)
  const [sessionLengthMinutes, setSessionLengthMinutes] = useState(
    SESSION_LENGTH_DEFAULT
  )

  // Establece los minutos y segundos de cada alarma.
  // Estos se visualizan en pantalla.

  //*BREAK COUNTDOWN
  const [countdownBreakMinutes, setCountdownBreakMinutes] =
    useState(BREAK_LENGTH_DEFAULT)
  const [countdownBreakSeconds, setCountdownBreakSeconds] =
    useState(SECONDS_DEFAULT)

  //*SESSION COUNTDOWN
  const [countdownSessionMinutes, setCountdownSessionMinutes] = useState(
    SESSION_LENGTH_DEFAULT
  )
  const [countdownSessionSeconds, setCountdownSessionSeconds] =
    useState(SECONDS_DEFAULT)

  //* DISPLAY *******************************************************************
  //* Countdown Session
  useEffect(() => {
    setCountdownSessionMinutes(sessionLengthMinutes)
  }, [sessionLengthMinutes])

  //* Countdown Break
  useEffect(() => {
    setCountdownBreakMinutes(breakLengthMinutes)
  }, [breakLengthMinutes])

  //* TIMER *******************************************************************
  // session: true
  // break: false

  //* TIMER ------------------------------------------------

  const timer = setInterval(() => {
    const itsSessionTime = sessionOrBreak && countdownStatus
    const itsBreakTime = !sessionOrBreak && countdownStatus

    //* SESSION countdown
    if (itsSessionTime) {
      // Los seg. llegan a -1 y se reinician a 59seg.
      if (countdownSessionSeconds === 0) {
        setCountdownSessionSeconds(COUNTDOWN_SECONDS_RESTART)
        setCountdownSessionMinutes((prev) => prev - 1)
        return
      }

      setCountdownSessionSeconds((prev) => prev - 1)
    }

    //* BREAK countdown
    if (itsBreakTime) {
      if (countdownBreakSeconds === 0) {
        setCountdownBreakSeconds(COUNTDOWN_SECONDS_RESTART)
        setCountdownBreakMinutes((prev) => prev - 1)
        return
      }
      setCountdownBreakSeconds((prev) => prev - 1)
    }
  }, 1000)

  useEffect(() => {
    return () => {
      clearInterval(timer)
    }
  }, [timer])

  // Si la alarma está pausada (countdownStatus en false), pararla.
  if (countdownStatus === false) clearInterval(timer)

  const itsTimeToChangeToBreak =
    countdownSessionMinutes === 0 &&
    countdownSessionSeconds === 0 &&
    sessionOrBreak === true

  const itsTimeToChangeToSession =
    countdownBreakMinutes === 0 &&
    countdownBreakSeconds === 0 &&
    sessionOrBreak === false

  if (itsTimeToChangeToBreak || itsTimeToChangeToSession) {
    clearInterval(timer)
  }

  //* ALARMA (segundo + audio) -------------------------------------------->
  //! esta parte tiene que añadir 1 seg para hacer sonar la alarma,
  //! añadir minutos de la longitud, cambiar a sesión/break

  const changeAlarm = setInterval(() => {
    if (itsTimeToChangeToBreak) {
      // sonar alarma y cambiar a break
      setCountdownSessionMinutes(sessionLengthMinutes)
      setCountdownSessionSeconds(SECONDS_DEFAULT)
      setSessionOrBreak(false)
      audioRef.current.currentTime = 0
      audioRef.current.play()
      return
    }

    if (itsTimeToChangeToSession) {
      // sonar alarma y cambiar a session
      setCountdownBreakMinutes(breakLengthMinutes)
      setCountdownBreakSeconds(SECONDS_DEFAULT)
      setSessionOrBreak(true)
      audioRef.current.currentTime = 0
      audioRef.current.play()
      return
    }
  }, 1000)

  useEffect(() => {
    return () => {
      clearInterval(changeAlarm)
    }
  }, [changeAlarm])

  if (countdownStatus === false) clearInterval(changeAlarm)

  useEffect(() => {
    if (firstTime) {
      setCountdownSessionMinutes(SESSION_LENGTH_DEFAULT)
      setCountdownBreakMinutes(BREAK_LENGTH_DEFAULT)
      setCountdownSessionSeconds(SECONDS_DEFAULT)
      setCountdownBreakSeconds(SECONDS_DEFAULT)
      setFirstTime(false)
    }
  }, [firstTime, sessionLengthMinutes, breakLengthMinutes])

  /*
  NOTA: por alguna razón el test de Freecodecamp hace que el reloj
  de la sesión pueda restar hasta -36 y al iniciar al poner play
  retrocede infinitamente, así que puse que si el length es < 0
  que deje por defecto 1 minuto (que sería el tiempo mínimo)

  --
  Lo mismo hice con breakLengthMinutes por si las dudas.
  */

  if (sessionLengthMinutes < 0) setSessionLengthMinutes(MINIMUM_TIME)
  if (breakLengthMinutes < 0) setBreakLengthMinutes(MINIMUM_TIME)

  //* AUDIO REF ----------------------------------------------------------->

  return (
    <div className='general-box'>
      <Break
        countdownStatus={countdownStatus}
        breakLengthMinutes={breakLengthMinutes}
        setBreakLengthMinutes={setBreakLengthMinutes}
        countdownBreakSeconds={countdownBreakSeconds}
        setCountdownBreakSeconds={setCountdownBreakSeconds}
        countdownBreakMinutes={countdownBreakMinutes}
        setCountdownBreakMinutes={setCountdownBreakMinutes}
      />
      <TimeLeft
        // get mm:ss - Session
        countdownSessionMinutes={countdownSessionMinutes}
        countdownSessionSeconds={countdownSessionSeconds}
        // set mm:ss - Session
        setCountdownSessionMinutes={setCountdownSessionMinutes}
        setCountdownSessionSeconds={setCountdownSessionSeconds}
        // get mm:ss - Break
        countdownBreakMinutes={countdownBreakMinutes}
        countdownBreakSeconds={countdownBreakSeconds}
        // set mm:ss - Break
        setCountdownBreakMinutes={setCountdownBreakMinutes}
        setCountdownBreakSeconds={setCountdownBreakSeconds}
        // session o break label
        sessionOrBreak={sessionOrBreak}
      />
      <audio id='beep' src={AUDIO_SRC} ref={audioRef}></audio>
      <Session
        // get mm length
        sessionLengthMinutes={sessionLengthMinutes}
        // set mm length
        setSessionLengthMinutes={setSessionLengthMinutes}
        // get ss countdown
        countdownSessionSeconds={countdownSessionSeconds}
        setCountdownSessionSeconds={setCountdownSessionSeconds}
        // play o pausa?
        countdownStatus={countdownStatus}
        // timeleft < 1 min
        countdownSessionMinutes={countdownSessionMinutes}
        setCountdownSessionMinutes={setCountdownSessionMinutes}
      />
      <Controls
        setCountdownStatus={setCountdownStatus}
        setSessionOrBreak={setSessionOrBreak}
        setBreakLengthMinutes={setBreakLengthMinutes}
        setSessionLengthMinutes={setSessionLengthMinutes}
        setCountdownBreakMinutes={setCountdownBreakMinutes}
        setCountdownBreakSeconds={setCountdownBreakSeconds}
        setCountdownSessionMinutes={setCountdownSessionMinutes}
        setCountdownSessionSeconds={setCountdownSessionSeconds}
        // audio alarma
        audioRef={audioRef}
      />
    </div>
  )
}

export default App
