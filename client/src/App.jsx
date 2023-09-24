import { EmpiricaClassic } from '@empirica/core/player/classic'
import { EmpiricaContext } from '@empirica/core/player/classic/react'
import { EmpiricaMenu, EmpiricaParticipant } from '@empirica/core/player/react'
import React from 'react'
import { Game } from './Game'
import { Introduction } from './intro-exit/Introduction'
import { ExitSurvey } from './intro-exit/ExitSurvey'

export default function App() {
	const urlParams = new URLSearchParams(window.location.search)
	const playerKey = urlParams.get('participantKey') || ''

	const { protocol, host } = window.location
	const url = `${protocol}//${host}/query`

	function introSteps() { // { game, player } passed in
		return [Introduction]
	}

	function exitSteps() { // { game, player } passed in
		return [ExitSurvey]
	}

	return (
		<EmpiricaParticipant url={url} ns={playerKey} modeFunc={EmpiricaClassic}>
			<div className="h-screen relative">
				<EmpiricaMenu position="bottom-left" />
				<div className="h-full overflow-auto">
					<EmpiricaContext introSteps={introSteps} exitSteps={exitSteps}>
						<Game />
					</EmpiricaContext>
				</div>
			</div>
		</EmpiricaParticipant>
	)
}
