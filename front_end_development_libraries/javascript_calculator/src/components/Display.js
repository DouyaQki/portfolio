import React from 'react'

const Display = ({ displayFormula, displayBottom, clearDisplay }) => {
  return (
    <section className='display-box'>
      <div className='display-top'>{displayFormula}</div>
      <div id='display' className='display-bottom'>
        {displayBottom.length === 0 ? clearDisplay : displayBottom}
      </div>
    </section>
  )
}

export default Display
