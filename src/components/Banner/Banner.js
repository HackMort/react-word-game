import React from 'react'

function Banner ({ status, numberOfGuesses, answer }) {
  return (
    <div class='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> 3 guesses</strong>.
      </p>
    </div>
  )
}

export default Banner
