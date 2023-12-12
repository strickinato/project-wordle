import React from "react";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);

  function submitGuess(guess) {
    setGuessList([...guessList, guess]);
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
        submitGuess={submitGuess}
      />
    </>
  );
}

export default Game;
