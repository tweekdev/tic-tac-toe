import React, { useState } from 'react';

const winnerLines = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [6, 4, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [1, 4, 7],
];

const nullArray = [null, null, null, null, null, null, null, null, null];

export const Morpion: React.FC = () => {
  const [squareElements, setsquareElements] = useState<any[]>(nullArray);
  const [form, setform] = useState<'O' | 'X'>('X');
  const isMatchNull = (squareElements: any) => {
    let isNull = false;
    for (let i = 0; i < squareElements.length; i++) {
      if (squareElements.includes(null)) {
        isNull = false;
      } else {
        return true;
      }
    }
    return isNull;
  };
  const checkIsWinner = (squareElements: any[]) => {
    for (let i = 0; i < winnerLines.length; i++) {
      const [a, b, c] = winnerLines[i];
      if (
        squareElements[a] &&
        squareElements[a] === squareElements[b] &&
        squareElements[a] === squareElements[c]
      ) {
        return true;
      }
    }
  };

  console.log(checkIsWinner(squareElements));
  return (
    <div className='morpion'>
      {checkIsWinner(squareElements) ? (
        <h6>le gagnant est {form === 'X' ? 'O' : 'X'}</h6>
      ) : null}
      {!checkIsWinner(squareElements) && isMatchNull(squareElements) ? (
        <h6>match null</h6>
      ) : null}
      <button onClick={() => setsquareElements(nullArray)}>reset</button>
      <div className='row'>
        {squareElements.map((squareElement: string | null, i: number) => (
          <div
            className='col'
            key={i}
            onClick={(e) => {
              const newSquare = [...squareElements];
              if (checkIsWinner(squareElements)) {
                return;
              }
              if (newSquare[i] === null) {
                newSquare[i] = form;
                setsquareElements(newSquare);
                form === 'X' ? setform('O') : setform('X');
              }
            }}
          >
            {squareElement}
          </div>
        ))}
      </div>
    </div>
  );
};
