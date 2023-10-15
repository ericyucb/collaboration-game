import React from 'react'
import { Rules } from '../components/Rules'
import { Button } from '../components/Button'

export function Introduction({ next }) {
	return (
		<div className="p-20">
			<Rules />
      <p className="text-sm my-5">Before we start, we will play an introductory round! This introductory round will not have previous scores, will allow you to see the entire board, and has a tip, but this will <b>not</b> exist in the main game. Click the button below to start!</p>
			<Button handleClick={next} autoFocus>
				<p>Start Intro Round</p>
			</Button>
		</div>
	)
}
