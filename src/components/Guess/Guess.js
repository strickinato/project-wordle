import React from 'react';

function Guess({ guess }) {
  return (
    <p className="guess" >
      {[...guess].map((char, index) =>
        <span className="cell" key={index}>{char}</span>
      )}
    </p>
  )
}

export function EmptyGuess() {
  return <Guess guess={'     '} />
}

export default Guess;
