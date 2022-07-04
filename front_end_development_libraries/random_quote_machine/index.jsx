class StreetFighterIIQuotes extends React.Component {
  constructor() {
    super()
    this.state = {
      phrase: [
        "Next time we meet, I'm gonna break your arms!",
        "I am not satisfied until I have the world's strongest title again!",
        'Thank you for a gorgeous time!',
        'Handsome fighters never lose a battle!',
        'I will meditate and then destroy you!!',
        "Can't you do better than that?",
        'There is no chance for you to beat me! Challenge someone else!',
        'Go home and be a family man!',
        'You did quite well, but you need more training to defeat me!',
        'You must defeat my Dragon Punch to stand a chance!',
        "Get up!! It's too early for you to be defeated!",
        "Hey, what happened? I'm not through with you yet!",
        "Get lost, you can't compare with my powers!",
        'Anyone who opposes me will be destroyed!',
        "You are not a warrior, you're a beginner!",
        'Attack me if you dare, I will crush you!',
        'Get up you wimp!',
        "I'm the strongest woman in the world!",
        "Now you've realized the inner mysteries of yoga!",
        'Seeing you in action is a joke!',
        'Now you realize the powers I possess!',
        "It's natural for a sumo wrestler to become the world's strongest!",
        'Are you man enough to fight with me?',
        'My strength is much greater than yours!',
      ],
      author: [
        'Zangief',
        'Sagat',
        'Vega',
        'Vega',
        'Dhalsim',
        'E. Honda',
        'Chun-Li',
        'Guile',
        'Ryu',
        'Ryu',
        'Ken',
        'Balrog',
        'M. Bison',
        'M. Bison',
        'Sagat',
        'Ken',
        'Balrog',
        'Chun-Li',
        'Dhalsim',
        'Blanka',
        'Blanka',
        'E. Honda',
        'Guile',
        'Zangief',
      ],
      quoteAnimated: "Next time we meet, I'm gonna break your arms!",
      portraits: [
        'assets/portraits/zangief.png',
        'assets/portraits/sagat.png',
        'assets/portraits/vega.png',
        'assets/portraits/vega.png',
        'assets/portraits/dhalsim.png',
        'assets/portraits/honda.png',
        'assets/portraits/chunli.png',
        'assets/portraits/guile.png',
        'assets/portraits/ryu.png',
        'assets/portraits/ryu.png',
        'assets/portraits/ken.png',
        'assets/portraits/balrog.png',
        'assets/portraits/bison.png',
        'assets/portraits/bison.png',
        'assets/portraits/sagat.png',
        'assets/portraits/ken.png',
        'assets/portraits/balrog.png',
        'assets/portraits/chunli.png',
        'assets/portraits/dhalsim.png',
        'assets/portraits/blanka.png',
        'assets/portraits/blanka.png',
        'assets/portraits/honda.png',
        'assets/portraits/guile.png',
        'assets/portraits/zangief.png',
      ],
      index: 0,
    }

    this.activate = this.activate.bind(this)
  }

  activate() {
    let buttonAudio = document.querySelector('button')
    buttonAudio.disabled = true
    buttonAudio.style.filter = 'blur(2px)'

    setTimeout(() => {
      buttonAudio.disabled = false
      buttonAudio.style.filter = 'blur(0px)'
    }, 5800)

    let sfVolume = document.querySelector('audio')
    sfVolume.play()
    // sfVolume.volume = 0.2;

    let i = 0

    this.setState(() => ({
      index: Math.floor(Math.random() * this.state.phrase.length),
    }))

    let intervalo = setInterval(() => {
      i += 1
      if (!(i === this.state.phrase[this.state.index].length + 1)) {
        this.setState(() => ({
          quoteAnimated: this.state.phrase[this.state.index].slice(0, i),
        }))
      } else {
        clearInterval(intervalo)
      }
    }, 50)
  }

  render() {
    const twitQuote =
      'https://twitter.com/intent/tweet?hashtags=' +
      this.state.author[this.state.index] +
      '&related=aca_el_tag&text=' +
      this.state.phrase[this.state.index]

    return (
      <main id='quote-box'>
        <section>
          <article>
            <img
              src={this.state.portraits[this.state.index]}
              id='portrait'
              alt={this.state.author[this.state.index] + ' portrait'}
            />
            <p id='author'>{'@' + this.state.author[this.state.index]}</p>
          </article>

          <p id='text'>{this.state.quoteAnimated}</p>
        </section>

        <section>
          <button onClick={this.activate} id='new-quote'>
            Next quote
          </button>

          <a href={twitQuote} id='tweet-quote' target='_top'>
            Tweet it
          </a>
        </section>

        <audio
          src='assets/sf_quote.mp3'
          volume='1.0'
        ></audio>
      </main>
    )
  }
}

ReactDOM.render(<StreetFighterIIQuotes />, document.getElementById('root'))
