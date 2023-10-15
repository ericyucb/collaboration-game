import React from 'react'

import { COLORS } from '../../../settings/Settings'
import '../css/Item.css'
import {
	usePlayer,
} from '@empirica/core/player/classic/react'

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

	return (
		isLive ?
			<div className={`item ${live}`} style={{backgroundColor: COLORS[type]}} onClick={() => player.stage.set('collect item', type)} /> :
			<div className='item' style={{backgroundColor: COLORS[type]}} />
	)
}