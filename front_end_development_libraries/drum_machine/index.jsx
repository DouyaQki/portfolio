class App extends React.Component {
  constructor() {
    super()
    this.keyboardPressed = this.keyboardPressed.bind(this)
    this.onClickKey = this.onClickKey.bind(this)
  }
  componentDidMount() {
    document.addEventListener('keydown', this.keyboardPressed)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyboardPressed)
  }

  keyboardPressed(e) {
    const keyboard = {
      Q: 81,
      W: 87,
      E: 69,
      A: 65,
      S: 83,
      D: 68,
      Z: 90,
      X: 88,
      C: 67,
    }

    const keyboardPressed = e.key.toUpperCase()

    if (keyboard[keyboardPressed] === e.keyCode) {
      document
        .getElementById(keyboardPressed)
        .play()
        .catch(() => {
          console.clear()
        })
    }

    const btnAnimation = () => {
      document
        .getElementById(`audio-${e.key.toLowerCase()}`)
        .classList.add('button-active')

      setTimeout(() => {
        document
          .getElementById(`audio-${e.key.toLowerCase()}`)
          .classList.remove('button-active')
      }, 100)
    }

    if (e.keyCode === keyboard[keyboardPressed]) {
      btnAnimation()
    }
  }

  onClickKey(e) {
    const $btnSound = document.getElementById(e.target.innerText)
    $btnSound.play().catch(() => {
      console.clear()
    })
  }

  render() {
    {
      this.keyboardPressed
    }
    return (
      <div id='drum-machine'>
        <article className='drum-title'>
          <img src='assets/drum_icon.png' alt='drum icon' />
          <h2>DRUM MACHINE</h2>
        </article>

        <div id='display'>
          <section>
            <button className='drum-pad' id='audio-q' onClick={this.onClickKey}>
              Q
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                className='clip'
                id='Q'
              ></audio>
            </button>
            <button className='drum-pad' id='audio-w' onClick={this.onClickKey}>
              W
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                className='clip'
                id='W'
              ></audio>
            </button>
            <button className='drum-pad' id='audio-e' onClick={this.onClickKey}>
              E
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                className='clip'
                id='E'
              ></audio>
            </button>
          </section>

          <section>
            <button className='drum-pad' id='audio-a' onClick={this.onClickKey}>
              A
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                className='clip'
                id='A'
              ></audio>
            </button>
            <button className='drum-pad' id='audio-s' onClick={this.onClickKey}>
              S
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                className='clip'
                id='S'
              ></audio>
            </button>
            <button className='drum-pad' id='audio-d' onClick={this.onClickKey}>
              D
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                className='clip'
                id='D'
              ></audio>
            </button>
          </section>

          <section>
            <button className='drum-pad' id='audio-z' onClick={this.onClickKey}>
              Z
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                className='clip'
                id='Z'
              ></audio>
            </button>
            <button className='drum-pad' id='audio-x' onClick={this.onClickKey}>
              X
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                className='clip'
                id='X'
              ></audio>
            </button>
            <button className='drum-pad' id='audio-c' onClick={this.onClickKey}>
              C
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                className='clip'
                id='C'
              ></audio>
            </button>
          </section>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
