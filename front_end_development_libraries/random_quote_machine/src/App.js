import React from 'react'
import './App.css'
import Quote from './Quote'
import { useState } from 'react'
import { quotes } from './Quote'
import twitter from './assets/twitter.png'

const idx = Math.floor(Math.random() * (23 - 0 + 1) + 0)

const App = () => {
  const [indexRandom, setIndexRandom] = useState(idx)
  const randomNumber = () => Math.floor(Math.random() * (23 - 0 + 1) + 0)

  const handleClick = () => setIndexRandom(randomNumber())

  const StreetFighterNames = quotes[indexRandom].author
    .replaceAll(/[-.]/gi, '_')
    .replaceAll(/[\s]/gi, '')

  const twitQuote =
    'https://twitter.com/intent/tweet?hashtags=' +
    `${StreetFighterNames}` +
    '&related=aca_el_tag&text=' +
    quotes[indexRandom].quote

  return (
    <div id='quote-box'>
      <Quote indexRandom={indexRandom} />

      <hr />

      <section className='twit-and-new-quote-box'>
        <div className='icon-box'>
          <a
            className='tweet-quote'
            id='tweet-quote'
            href={twitQuote}
            target='_top'
            title='Tweet this quote!'
          >
            <img className='twitter-icon' src={twitter} alt='Twitter logo' />
          </a>
        </div>

        <button id='new-quote' onClick={handleClick}>
          New quote
        </button>
      </section>
    </div>
  )
}

export default App
