import React from "react";

function Form({ handleNewGuessWord }) {
  const [guessWord, setGuessWord] = React.useState('');
  function handleFormSubmit(event) {
    event.preventDefault();
    // console.log({ guessWord })
    handleNewGuessWord(guessWord)
    setGuessWord('')
  }
  return (
    <>
      <form className="guess-input-wrapper"
      onSubmit={handleFormSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" value={guessWord} onChange={(event) => {
          const word = event.target.value.toUpperCase();
          setGuessWord(word)
        }} required={true} maxLength={5} pattern="[a-zA-Z]{5}" title="5 letter word!" />
      </form>
    </>
  );
}

export default Form;
