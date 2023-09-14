import React from 'react'
import {
	usePlayer,
} from '@empirica/core/player/classic/react'

import '../css/Controls.css'

import { Item } from './Item'

const live = 'hover:brightness-90 cursor-pointer'
const disabled = 'opacity-30'

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
  
	const handleReset = () => {
		player.stage.set('action', null)
		player.stage.set('collect item', null)
		player.stage.set('drop item', null)
	}

	return (
		<div className='controls'>
			<ControlIconButton name='Collect' onClick={handleCollectItem} displayIcon={collectItem} />
			<ControlIconButton name='Drop' onClick={handleDropItem} displayIcon={dropItem} />
			<ControlButton name='Lock In' onClick={() => player.stage.set('submit', true)} isLive={!canMove} />
			<ControlButton name='Reset' onClick={handleReset} isLive={!canMove} />
		</div>
	)
}

function ControlButton({ name, onClick, isLive=true }) {
	return (
		<div className={`control-button bg-blue-500 ${isLive ? live : disabled}`} onClick={isLive ? onClick : () => {}}>
			<h3>{name}</h3>
		</div>
	)
}

function ControlIconButton({ name, onClick, displayIcon }) {
	const isLive = displayIcon !== null
  
	return (
		<div className={`control-button bg-blue-500 ${isLive ? live : disabled}`} onClick={isLive ? onClick : () => {}}>
			<h3>{name}</h3>
			{displayIcon === null ? null : <Item type={displayIcon} />}
		</div>
	)
}