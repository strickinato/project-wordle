import React from "react";

function GuessInput({ currentGuess, setCurrentGuess, submitGuess }) {
  function handleSubmit(e) {
    e.preventDefault();
    submitGuess(currentGuess);
    setCurrentGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        pattern="[A-Z]{5}"
        value={currentGuess.toUpperCase()}
        onChange={(e) => setCurrentGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
