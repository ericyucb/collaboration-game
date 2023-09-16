import React from 'react'
import { useDrag } from 'react-dnd'

import '../css/Player.css'

export function Player({ id, draggable }) {
	const [, drag] = useDrag(() => ({
		type: 'player',
	}))

	return (
		<div
			className={`h-9/12 w-9/12 rounded-md shadow border-1 bg-white p-1 ${draggable ? 'cursor-pointer hover:brightness-75' : ''}`}
			ref={draggable ? drag : null}
			style={{ backgroundImage: `url('https://avatars.dicebear.com/api/identicon/${id}.svg')`}}
		/>
	)
}