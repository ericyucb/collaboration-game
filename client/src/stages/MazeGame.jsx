import React from 'react'
import {
	usePlayer,
	usePlayers,
	useRound,
  useGame,
} from '@empirica/core/player/classic/react'

import '../css/MazeGame.css'

import { Board } from '../components/Board'
import { Dashboard } from '../components/Dashboard'
import { Controls } from '../components/Controls'
import { Scores } from '../components/Scores'
import { Tip } from '../components/Tip'
import { HelpPopup } from '../components/HelpPopup'
import { updateGame } from '../../../settings/Utils'

export function MazeGame() {
	const round = useRound()
	const player = usePlayer()
	const players = usePlayers()
  const game = useGame()

	const otherPlayer = players.length === 2 ? players.filter(p => p.id !== player.id)[0] : null

	const action = player.stage.get('action')
	const canMove = action === null

	const [ nextBoard, nextPlayerPos, nextPlayerBag ] = updateGame(round.get('board'), action, player)

  const capacity = round.get('capacity')

  const bagTotal = nextPlayerBag.reduce((currSum, num) => currSum + num, 0)
  const canCollect = bagTotal < capacity

	const collectiveBag = players.length === 2 ? otherPlayer.round.get('bag').map((numItem, index) => numItem + nextPlayerBag[index]) : null

  const fullVision = player.stage.get('vision')

  const introRound = round.get('name') === 'Introduction Round'

	return (
		<div className='game'>
      {introRound ? <Tip /> : null}
			<div className='game-board'>
				<Board
					board={nextBoard}
					playerPos={nextPlayerPos}
					playerId={player.id}
					otherPos={otherPlayer ? otherPlayer.round.get('position') : null}
					otherId={otherPlayer ? otherPlayer.id : null}
					vision={player.round.get('position')}
          fullVision={fullVision}
					canMove={canMove}
          canCollect={canCollect}
				/>
				<Dashboard
					goal={round.get('goal')}
					individualGoal={otherPlayer ? player.round.get('individual goal') : null}
					capacity={capacity}
					bag={nextPlayerBag}
          bagTotal={bagTotal}
					collectiveBag={collectiveBag}
					canMove={canMove}
          visionAllowed={introRound}
          fullVision={fullVision}
				/>
			</div>
      <Controls canMove={canMove} />
      {introRound ? null : <Scores scores={player.game.get('scores')} setups={game.get('setups')} />}
      {player.stage.get('help') ? <HelpPopup /> : null}
		</div>
	)
}