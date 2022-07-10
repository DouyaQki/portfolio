const App = () => {
  const [display, setDisplay] = React.useState('0')

  const handleClick = (e) => {
    const $btn = document.querySelector(`.${e.target.className}`).innerText
    const DONT_START_WITH_ZERO = /^0/g.test(display) || $btn === 0
    const START_WITH_ZERO = !/^0/g.test(display)

    console.log($btn)

    if ($btn === '.' && $btn.length === 1) {
      setDisplay('0.')
    }

    if (DONT_START_WITH_ZERO) {
      setDisplay($btn)
    } else if (START_WITH_ZERO) {
      setDisplay(display.concat($btn))
    }
  }

  //* EQUALS
  const evaluateCalc = () => {
    let newStr = display

    if (/\++/g.test(display)) {
      newStr = newStr.replaceAll(/\++/g, '+')
    } else if (/\-+/g.test(display)) {
      newStr = newStr.replaceAll(/\-+/g, '-')
    } else if (/\*+/g.test(display)) {
      newStr = newStr.replaceAll(/\*+/g, '*')
    } else if (/\/+/g.test(display)) {
      newStr = newStr.replaceAll(/\/+/g, '/')
    }

    if (/\.+/g.test(display)) {
      newStr = newStr.replaceAll(/\.+/g, '.')
    }

    let result = math.evaluate(newStr).toString()

    setDisplay(result)
  }

  //* CLEAR
  const AC = () => setDisplay('0')

  return (
    <div className='container'>
      <div id='display' className='btn-17'>
        {display.replaceAll(/\.+/g, '.')}
      </div>
      <button id='zero' className='btn-0' onClick={handleClick}>
        0
      </button>
      <button id='one' className='btn-1' onClick={handleClick}>
        1
      </button>
      <button id='two' className='btn-2' onClick={handleClick}>
        2
      </button>
      <button id='three' className='btn-3' onClick={handleClick}>
        3
      </button>
      <button id='four' className='btn-4' onClick={handleClick}>
        4
      </button>
      <button id='five' className='btn-5' onClick={handleClick}>
        5
      </button>
      <button id='six' className='btn-6' onClick={handleClick}>
        6
      </button>
      <button id='seven' className='btn-7' onClick={handleClick}>
        7
      </button>
      <button id='eight' className='btn-8' onClick={handleClick}>
        8
      </button>
      <button id='nine' className='btn-9' onClick={handleClick}>
        9
      </button>
      <button id='decimal' className='btn-10' onClick={handleClick}>
        .
      </button>
      <button id='add' className='btn-11' onClick={handleClick}>
        +
      </button>
      <button id='subtract' className='btn-12' onClick={handleClick}>
        -
      </button>
      <button id='multiply' className='btn-13' onClick={handleClick}>
        *
      </button>
      <button id='divide' className='btn-14' onClick={handleClick}>
        /
      </button>
      <button id='clear' className='btn-15' onClick={AC}>
        AC
      </button>
      <button id='equals' className='btn-16' onClick={evaluateCalc}>
        =
      </button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
