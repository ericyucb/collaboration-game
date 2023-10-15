import React from "react"
import UI from '../assets/UI_annotated.jpg'

export function Rules() {
  return (
    <>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        How to Play (Single Player)
			</h3>
			<div className="mt-2 mb-6">
				<p className="text-sm">
          The goal of the game is to collect all the items you need to complete the goal displayed on the dashboard while trying to minimize your score.
				</p>
				<img className="w-500px" src={UI} />
				<p className="text-sm">
          There are three types of actions you can make on any turn:
				</p>
				<ul className="text-sm list-disc pl-5">
					<li>Move (+1 score): Drag your player icon to an adjacent cell (up, down, left, or right).</li>
					<li>{'Collect item (+1 score): If there is an item (represented by a colored dot) in the cell you are on, you can click it to queue the item for collection, then click the \'Collect\' button in the controls.'}</li>
					<li>{'Drop item (+1 score): If you have an item in your bag, you can click the list entry in your bag to queue the item for dropping, then click the \'Drop\' button in the controls.'}</li>
				</ul>
				<p className="text-sm">
					{'Once you choose an action, you can lock it in and proceed to the next turn using the \'Proceed\' button, or change your mind and reset the action using the \'Reset\' button.'}
				</p>
        <br />
				<p className="text-sm">
					{'You will be playing three setups total, playing each setup twice.'}
				</p>
			</div>
    </>
  )
}