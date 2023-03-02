import React from 'react'
import { sample } from '../../utils'
import { WORDS } from '../../data'
import Form from '../Form'
import Banner from '../Banner'
import GuessWordsList from '../GuessWordsList'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game () {
  const [guesses, setNewGuesses] = React.useState([])
  // const [showBanner, setShowBanner] = React.useState(false)
  // running, won, lost.
  const [gameStatus, setGameStatus] = React.useState('running')
  function handleNewGuessWord (guessWord) {
    const newWord = { id: Math.random(), word: guessWord }
    const newGuessesArray = [...guesses, newWord]
    setNewGuesses(newGuessesArray)
    if (guessWord.toUpperCase() === answer) {
      setGameStatus('won')
    } else if (newGuessesArray.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }
  return (
    <>
      <GuessWordsList words={guesses} answer={answer} />
      <Form handleNewGuessWord={handleNewGuessWord} gameStatus={gameStatus} />
      {gameStatus !== 'running' && (
        <Banner status={gameStatus} numberOfGuesses={guesses.length} answer={answer} />
      )}
    </>
  )
}

export default Game
