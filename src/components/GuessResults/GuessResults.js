import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'
import { range } from '../../utils.js'
import Guess, { EmptyGuess } from '../Guess'

function GuessResults({ guessList }) {
  const guesses = range(0, NUM_OF_GUESSES_ALLOWED).map((_, index) => {
    const guess = guessList[index]

    return guess
      ? <Guess key={index} guess={guess} />
      : <EmptyGuess key={index} />
  })


  return (
    <div className="guess-results">
      {...guesses}
    </div >
  )
}

export default GuessResults;
