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

  function handleNewGuessWord (guessWord) {
    const newWord = {
      id: Math.random(),
      word: guessWord
    }
    setNewGuesses([...guesses, newWord])
  }

  return (
    <>
      <GuessWordsList words={guesses} answer={answer} />
      <Form handleNewGuessWord={handleNewGuessWord} />
      <Banner />
    </>
  )
}

export default Game
