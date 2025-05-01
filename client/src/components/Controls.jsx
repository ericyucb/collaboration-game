import React from 'react'
import {
	usePlayer,
} from '@empirica/core/player/classic/react'

import '../css/Controls.css'

import { ControlButton } from './ControlButton'

export function Controls({ canMove }) {
	const player = usePlayer()
	
	const action = player.stage.get('action')
	
	// Check what type of action has been performed
	const hasMovedAction = action != null && action.type === 'move'
	const hasAction = action != null
	
	// Only show the proceed button after a move action, not after collecting
	const showProceed = hasMovedAction
	const showReset = hasAction
	
	// Can move only if no action has been performed
	const playerCanMove = action === null
	
	const collectItem = player.stage.get('collect item')
	const dropItem = player.stage.get('drop item')

  const resetQueuedItems = () => {
    player.stage.set('collect item', null)
		player.stage.set('drop item', null)
  }

	const handleCollectItem = () => {
		player.stage.set('action', { type: 'collect', item: collectItem })
		resetQueuedItems()
	}

	const handleDropItem = () => {
		player.stage.set('action', { type: 'drop', item: dropItem })
		resetQueuedItems()
	}

  const handleSkip = () => {
    player.stage.set('action', { type: 'skip'})
    resetQueuedItems()
  }

  const handleProceed = () => {
    player.stage.set('submit', true)
    resetQueuedItems()
  }
  
	const handleReset = () => {
		player.stage.set('action', null)
		resetQueuedItems()
	}

	return (
		<div className='controls'>
			{/* <ControlIconButton name='Collect' onClick={handleCollectItem} displayIcon={collectItem} /> */}
			{/* <ControlIconButton name='Drop' onClick={handleDropItem} displayIcon={dropItem} /> */}
      {/* <ControlButton name='Skip' onClick={handleSkip} isLive={canMove} /> */}
			{<ControlButton name='Proceed' onClick={handleProceed} isLive={showProceed} />}
			{/* <ControlButton name='Reset' onClick={handleReset} isLive={true} />} */}
		</div>
	)
}