const App = () => {
  const [breakLength, setBreakLength] = React.useState(5)
  const [sessionLength, setSessionLength] = React.useState(25)
  const [play, setPlay] = React.useState(false)
  const [timingType, setTimingType] = React.useState('SESSION')
  const [timeLeft, setTimeLeft] = React.useState(1500)

  let timeLeftColor = document.getElementById('time-left')

  const timeout = setTimeout(() => {
    if (timeLeft && play) {
      setTimeLeft(timeLeft - 1)
    }
  }, 1000)

  const handleBreakIncrease = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1)
    }
  }

  const handleBreakDecrease = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1)
    }
  }

  const handleSessionIncrease = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1)
      setTimeLeft(timeLeft + 60)
    }
  }

  const handleSessionDecrease = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1)
      setTimeLeft(timeLeft - 60)
    }
  }

  const timeFormatter = () => {
    const minutes = Math.floor(timeLeft / 60) //* timeLeft está en 1500seg = 25min
    const seconds = timeLeft - minutes * 60
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds

    return `${formattedMinutes}:${formattedSeconds}`
  }

  const handlePlay = () => {
    clearTimeout(timeout)
    setPlay(!play)
  }

  const resetTimer = () => {
    const audio = document.getElementById('beep')
    if (!timeLeft && timingType === 'SESSION') {
      setTimeLeft(breakLength * 60)
      setTimingType('BREAK')
      audio.play()
    }

    if (!timeLeft && timingType === 'BREAK') {
      setTimeLeft(sessionLength * 60)
      setTimingType('SESSION')
      audio.pause()
      audio.currentTime = 0
    }
  }

  const clock = () => {
    if (play) {
      timeout
      resetTimer()
    } else {
      clearTimeout(timeout)
    }
  }

  const handleReset = () => {
    clearTimeout(timeout)
    setPlay(false)
    setTimeLeft(1500)
    setBreakLength(5)
    setSessionLength(25)
    setTimingType('SESSION')
    const audio = document.getElementById('beep')
    audio.pause()
    audio.currentTime = 0
  }

  React.useEffect(() => {
    let timeLeftColor = document.getElementById('time-left')
    let timeLeftColorSplit = timeLeftColor.innerText.split(':')

    if (timeLeftColorSplit[0] === '00') {
      timeLeftColor.style.color = '#cc3333'
      timeLeftColor.style.textShadow = '0 0 1rem #cc3333, 0 0 4rem #262d3e'
    }

    if (timeLeftColorSplit[0] !== '00') {
      timeLeftColor.style.color = '#fff'
      timeLeftColor.style.textShadow = '0 0 1rem #fff, 0 0 4rem #262d3e'
    }

    clock()
  }, [play, timeLeft, timeout])

  const title = timingType === 'SESSION' ? 'Session' : 'Break'

  return (
    <div>
      <div className='wrapper'>
        <div className='break-session-box'>
          <h3 id='break-label'>Break Length</h3>
          <div className='break-session-box-buttons'>
            <button
              disabled={play}
              onClick={handleBreakDecrease}
              id='break-decrement'
            >
              -
            </button>

            <strong id='break-length'>{breakLength}</strong>
            <button
              disabled={play}
              onClick={handleBreakIncrease}
              id='break-increment'
            >
              +
            </button>
          </div>
        </div>

        <div className='timer'>
          <h2 id='timer-label'>{title}</h2>
          <h3 id='time-left'>{timeFormatter()}</h3>
        </div>

        <div className='break-session-box'>
          <div className='break-session-box'>
            <h3 id='session-label'>Session Length</h3>
            <div className='break-session-box-buttons'>
              <button
                disabled={play}
                onClick={handleSessionDecrease}
                id='session-decrement'
              >
                -
              </button>
              <strong id='session-length'>{sessionLength}</strong>
              <button
                disabled={play}
                onClick={handleSessionIncrease}
                id='session-increment'
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className='timer-buttons-box'>
          <button onClick={handlePlay} id='start_stop'>
            ⏵⏸
          </button>

          <button onClick={handleReset} id='reset'>
            Reset
          </button>
        </div>
      </div>
      <audio
        id='beep'
        preload='auto'
        src='http://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
      ></audio>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
