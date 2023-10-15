import React from 'react'

import { Attempts } from '../../../settings/Setups'

import '../css/Scores.css'

export function Scores({ scores, setups }) {
  const createScores = (scores, setups, numAttempts) => {
    console.log(setups)
    const scoreElements = []
    for (let attemptIndex = 0; attemptIndex < numAttempts; attemptIndex++) {
      setups.forEach((setup, setupIndex) => {
        const combinedIndex = setupIndex * numAttempts + attemptIndex
        scoreElements.push(
          <div className='score-label'>
            <p key={`label ${combinedIndex}`}>
              {`Setup ${setup.setup.name} | Attempt ${attemptIndex + 1}: `}
            </p>
          </div>
        )

        scoreElements.push(
          <p key={`value ${combinedIndex}`}>
            {combinedIndex < scores.length ? scores[combinedIndex] : ''}
          </p>
        )
      });
    }
    return scoreElements
  }

  return (
    <div className='scores'>
      <div className='scores-grid' style={{
        gridTemplateColumns: `repeat(${setups.length}, 1fr 40px)`,
        gridTemplateRows: `repeat(${Attempts}, 1fr)`,
      }}>
        {createScores(scores, setups, Attempts)}
      </div>
    </div>
  )
}