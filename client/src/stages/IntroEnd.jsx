import React from 'react'
import {
	usePlayer,
} from '@empirica/core/player/classic/react'

import '../css/IntroEnd.css'
import { Button } from '../components/Button'
import { Questionaire } from '../components/Questionaire'
import { HelpButton, HelpPopup } from '../components/HelpPopup'

import { INTROQUESTIONS } from '../../../settings/IntroQuestions'

export function IntroEnd() {
	const player = usePlayer()

  const complete = player.get('intro complete')
  
	return (
		<div className='game intro-end'>
      <p>
        {`You took ${player.round.get('score')} turns! Before we start the official game, complete the following comprehension check.`}
      </p>
      <br />
      <Questionaire setupName='intro' questions={INTROQUESTIONS} submit={() => {}} disabled={complete} />
      {
        complete ? 
        <>
          <p className='start-label'>{'Nice work! Press the \'Start\' button below to start the game!'}</p>
          <Button className='intro-end-btn' primary handleClick={() => player.stage.set('submit', true)}>
            <p>Start</p>
          </Button>
        </> :
        null
      }
      <HelpButton />
      {player.stage.get('help') ? <HelpPopup /> : null}
		</div>
	)
}