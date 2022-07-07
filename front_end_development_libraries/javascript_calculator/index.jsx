class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id='calculator'>
        <section className='container'>
          <header className="header-title">
          <img src='assets/calculator_icon.png' alt='calculator icon' />
          <h2>JavaScript Calculator</h2>
          </header>
          <h2 className='visor'>0123456789</h2>
          <button className='btn-10'>+</button>
          <button className='btn-11'>-</button>
          <button className='btn-12'>*</button>
          <button className='btn-13'>/</button>
          <button className='btn-0'>0</button>
          <button className='btn-1'>1</button>
          <button className='btn-2'>2</button>
          <button className='btn-3'>3</button>
          <button className='btn-4'>4</button>
          <button className='btn-5'>5</button>
          <button className='btn-6'>6</button>
          <button className='btn-7'>7</button>
          <button className='btn-8'>8</button>
          <button className='btn-9'>9</button>
          <button className='btn-dot'>.</button>
          <button className='btn-14'>=</button>
          <button className='btn-clear'>CLEAR</button>
        </section>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
