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
        required
        pattern="[A-Z]{5}"
        value={currentGuess.toUpperCase()}
        onChange={(e) => setCurrentGuess(e.target.value.toUpperCase())}
        title="5 Letter Word"
      />
    </form>
  );
}

export default GuessInput;
