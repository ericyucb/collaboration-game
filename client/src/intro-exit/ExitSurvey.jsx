import { usePlayer } from '@empirica/core/player/classic/react'
import React, { useState } from 'react'
import { Button } from '../components/Button'

export function ExitSurvey({ next }) {
	const labelClassName = 'block text-sm font-medium text-gray-700 my-2'
	const inputClassName =
    'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-empirica-500 focus:border-empirica-500 sm:text-sm'
	const player = usePlayer()

  const [name, setName] = useState('')
	const [strength, setStrength] = useState('')
	const [feedback, setFeedback] = useState('')

	function handleSubmit(event) {
		event.preventDefault()
		player.set('exitSurvey', {
      name,
			strength,
			feedback,
		})
		next()
	}

	return (
		<div className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <form
				className="mt-12 space-y-8 divide-y divide-gray-200"
				onSubmit={handleSubmit}
			>
				<div className="space-y-8 divide-y divide-gray-200">
					<div>
						<div>
							<h3 className="text-lg leading-6 font-medium text-gray-900">
                Exit Survey
							</h3>
							<p className="mt-1 text-sm text-gray-500">
                Please answer the following short survey. You do not have to
                provide any information you feel uncomfortable with.
							</p>
						</div>

						<div className="space-y-8 mt-6">
							<div className="flex flex-row">
								<div className="ml-5">
									<label htmlFor="email" className={labelClassName}>
                    Name
									</label>
									<div className="mt-1">
										<input
											id="name"
											name="name"
											autoComplete="off"
											className={inputClassName}
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-x-6 gap-y-3">
								<label className={labelClassName}>
                  How would you describe your strength in the game?
								</label>

								<label className={labelClassName}>
                  Feedback, including problems you encountered.
								</label>

								<textarea
									className={inputClassName}
									dir="auto"
									id="strength"
									name="strength"
									rows={4}
									value={strength}
									onChange={(e) => setStrength(e.target.value)}
								/>

								<textarea
									className={inputClassName}
									dir="auto"
									id="feedback"
									name="feedback"
									rows={4}
									value={feedback}
									onChange={(e) => setFeedback(e.target.value)}
								/>
							</div>

							<div className="mb-12">
								<Button type="submit">Submit</Button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}