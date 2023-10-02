import React from 'react'
import {
	usePlayer,
	useRound,
} from '@empirica/core/player/classic/react'

import { ITEM_NAMES } from '../settings'
import '../css/Dashboard.css'

export function Dashboard({ goal, individualGoal, capacity, bag, bagTotal, collectiveBag, canMove }) {
	return (
		<div className='dashboard'>
			<div className='bag'>
				<h2 className='bag-title'><u>Bag</u></h2>
				<h5 className='capacity'>Bag Total: <span style={bagTotal === capacity ? {color: 'red'} : {}}>{bagTotal}/{capacity}</span></h5>
				{
					individualGoal ?
						<>
							<h3><u>Bag/Solo/Shared Goal</u></h3>
							<BagList
								bag={bag}
								collectiveBag={collectiveBag}
								individualGoal={individualGoal}
								sharedGoal={goal}
								canMove={canMove}
							/>
						</> :
						<>
							<h3><u>Bag/Goal</u></h3>
							<BagList
								bag={bag}
								individualGoal={goal}
								canMove={canMove}
							/>
						</>
				}
			</div>
		</div>
	)
}

function BagList({ bag, collectiveBag=null, individualGoal, sharedGoal=null, canMove }) {
	const player = usePlayer()
	const round = useRound()

	const createBagListItem = (itemName, item) => {
		return (
			<p
				key={item}
				className={canMove && bag[item] ? 'list-item can-drop' : 'list-item'}
				onClick={() => canMove && bag[item] !== 0 ? player.stage.set('drop item', item) : null}
			>
        {bag[item]}/
        <span className={bag[item] < individualGoal[item] ? 'list-item-incomplete' : 'list-item-complete'}>{individualGoal[item]}</span>
				{
					sharedGoal ?
            <span className={collectiveBag[item] < sharedGoal[item] ? 'list-item-incomplete' : 'list-item-complete'}>
              {`/${sharedGoal[item]}`}
            </span> :
            null
				}
        {` ${itemName}`}
			</p>
		)
	}

	return (
		<>
			{ITEM_NAMES.slice(0, round.get('numDistinctItems')).map(createBagListItem)}
		</>
	)
}