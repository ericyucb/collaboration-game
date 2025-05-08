import React from 'react'
import {
	usePlayer,
} from '@empirica/core/player/classic/react'

import { Button } from '../components/Button'

import '../css/MazeGameEnd.css'

export function MazeGameEnd() {
	const player = usePlayer()
  
	return (
		<div className='game'>
			<div className='next-setup-label'>
				{`You scored ${player.round.get('totalScore')} points! Click 'Continue' below to start the next setup (or finish the game if this was the last setup).`}
			</div>
			<Button primary handleClick={() => player.stage.set('submit', true)}>
				<p>Continue</p>
			</Button>
		</div>
	)
}