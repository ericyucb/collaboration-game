import React from 'react'
import {
	usePlayer,
	useRound
} from '@empirica/core/player/classic/react'

import { COLORS } from '../../../settings/Settings'
import '../css/Item.css'
import { updateGame } from '../../../settings/Utils'

const live = 'hover:brightness-90 cursor-pointer'

export function Magazine({ items, corner, isLive }) {
	return (
		<div className={`magazine${corner ? ' corner' : ''}`}>
			{items.length === 0 ? null : items.map((item, index) => <Item key={index} type={item} isLive={isLive} />)}
		</div>
	)
}

export function Item({ type, isLive }) {
	const player = usePlayer()
	const round = useRound()
	
	const handleCollectItem = () => {
		// Set the action to collect this item
		const collectAction = { type: 'collect', item: type }
		player.stage.set('action', collectAction)
		
		// Get the current board and update it
		const board = round.get('board')
		const playerPos = player.round.get('position')
		const playerBag = player.round.get('bag')
		
		// Process the collect action locally
		const boardCopy = board.map(row => row.map(cell => cell.map(item => item)))
		const itemIndex = boardCopy[playerPos[0]][playerPos[1]].indexOf(type)
		
		if (itemIndex !== -1) {
			// Remove item from board
			boardCopy[playerPos[0]][playerPos[1]].splice(itemIndex, 1)
			
			// Update the player's bag
			const bagCopy = playerBag.map(count => count)
			bagCopy[type]++
			
			// Save changes to the round
			round.set('board', boardCopy)
			player.round.set('bag', bagCopy)
		}
		
		console.log('Collected item type:', type)
	}
	
	return (
		isLive ?
			<div className={`item ${live}`} style={{backgroundColor: COLORS[type]}} onClick={() => handleCollectItem()} /> :
			<div className='item' style={{backgroundColor: COLORS[type]}} />
	)
}