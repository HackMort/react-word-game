import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import Form from '../Form'
import Banner from '../Banner'
import GuessWordsList from '../GuessWordsList'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game () {
  const [guesses, setNewGuesses] = React.useState([])
  const [showBanner, setShowBanner] = React.useState(false)
  // running, win, lost.
  const [gameStatus, setGameStatus] = React.useState('')
  function handleNewGuessWord (guessWord) {
    const newWord = { id: Math.random(), word: guessWord }
    setNewGuesses([...guesses, newWord])
    if (guessWord.toUpperCase() === answer) {
      window.alert('Won!')
    }
  }

  return (
    <>
      <GuessWordsList words={guesses} answer={answer} />
      <Form handleNewGuessWord={handleNewGuessWord} />
      {showBanner && <Banner status={gameStatus} />}
    </>
  )
}

export default Game
