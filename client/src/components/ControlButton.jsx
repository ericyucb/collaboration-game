import React from 'react'
import '../css/ControlButton.css'

import { Item } from './Item'

const live = 'hover:brightness-90 cursor-pointer'
const disabled = 'opacity-30'

export function ControlButton({ name, onClick, isLive=true }) {
	return (
		<div className={`control-button bg-blue-200 ${isLive ? live : disabled}`} onClick={isLive ? onClick : () => {}}>
			<h3>{name}</h3>
		</div>
	)
}

export function ControlIconButton({ name, onClick, displayIcon }) {
	const isLive = displayIcon !== null
  
	return (
		<div className={`control-button bg-blue-200 ${isLive ? live : disabled}`} onClick={isLive ? onClick : () => {}}>
			<h3>{name}</h3>
			{displayIcon === null ? null : <Item type={displayIcon} />}
		</div>
	)
}