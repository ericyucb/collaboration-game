import React from 'react'
import {
	usePlayer,
} from '@empirica/core/player/classic/react'

import '../css/Controls.css'

import { ControlButton, ControlIconButton } from './ControlButton'

export function Controls({ canMove }) {
	const player = usePlayer()

	const collectItem = player.stage.get('collect item')
	const dropItem = player.stage.get('drop item')

	const handleCollectItem = () => {
		player.stage.set('action', { type: 'collect', item: collectItem })
		player.stage.set('collect item', null)
	}

	const handleDropItem = () => {
		player.stage.set('action', { type: 'drop', item: dropItem })
		player.stage.set('drop item', null)
	}

  const handleProceed = () => {
    console.log(player.stage.get('action'))
    player.stage.set('submit', true)
  }
  
	const handleReset = () => {
		player.stage.set('action', null)
		player.stage.set('collect item', null)
		player.stage.set('drop item', null)
	}

	return (
		<div className='controls'>
			<ControlIconButton name='Collect' onClick={handleCollectItem} displayIcon={collectItem} />
			<ControlIconButton name='Drop' onClick={handleDropItem} displayIcon={dropItem} />
			<ControlButton name='Proceed' onClick={handleProceed} isLive={!canMove} />
			<ControlButton name='Reset' onClick={handleReset} isLive={!canMove} />
		</div>
	)
}