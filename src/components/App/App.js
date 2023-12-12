import React from 'react'
import Game from '../Game';
import Header from '../Header';
import GuessInput from '../GuessInput'

function App() {
  const [currentGuess, setCurrentGuess] = React.useState('')

  function submitGuess(guess) {
    console.log(guess)
  }

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
        <GuessInput
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
          submitGuess={submitGuess}
        />
      </div>
    </div>
  );
}

export default App;
