import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess ({ word, answer }) {
  const letters = word ? word.word : undefined
  const result = checkGuess(letters, answer)
  return (
    <>
      <p className='guess'>
        {range(5).map((num) => {
          const classItem = `cell ${result ? result[num].status : ''}`
          return <span key={num} className={classItem}>{letters ? letters[num] : undefined}</span>
        }
        )}
      </p>
    </>
  )
}

export default Guess
