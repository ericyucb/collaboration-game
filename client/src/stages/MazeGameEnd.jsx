import React from 'react'
import {
	usePlayer,
} from '@empirica/core/player/classic/react'

import '../css/Game.css'
import { Button } from '../components/Button'

export function MazeGameEnd() {
	const player = usePlayer()
  
	return (
		<div className='game'>
			<div>
				{'You got a score of {player.round.get(\'score\')}! Click \'Next Game\' below to start the next setup.'}
			</div>
			<Button primary handleClick={() => player.stage.set('submit', true)}>
				<p>Next Game</p>
			</Button>
		</div>
	)
}