import React from 'react'

function Banner ({ status, numberOfGuesses, answer }) {
  // const [showBanner, setShowBanner] = React.useState(false)
  console.log('Status: ', status)
  if (status === 'lost') {
    return (
      <>
        <div className='sad banner'>
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      </>
    )
  }
  return (
    <>
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numberOfGuesses <= 1 ? `${numberOfGuesses} guess` : `${numberOfGuesses} guesses`}</strong>.
        </p>
      </div>
    </>
  )
}

export default Banner
