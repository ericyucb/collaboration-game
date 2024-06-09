import React from 'react'
import {
  usePlayer,
  useRound
} from '@empirica/core/player/classic/react'

// import '../css/MazeGameSurvey.css'
import { Questionaire } from '../components/Questionaire'
import { MIDGAMEQUESTIONS } from '../../../settings/MidgameQuestions'

export function MazeGameSurvey() {
  const player = usePlayer()
  const round = useRound()

  return (
    <div className='game maze-game-survey'>
      <p>
        {`Congratulations! You took ${player.round.get('score')} turns! Please complete the following survey about the last couple of attempts on the same setup.`}
      </p>
      <Questionaire
        title={`${round.get('setup').name} Questionaire`}
        setupName={round.get('setup').name}
        questions={MIDGAMEQUESTIONS}
        submit={() => player.stage.set('submit', true)}
        categories={true}
      />
    </div>
  )
}