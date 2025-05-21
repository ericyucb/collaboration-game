import React from "react";
import UI from '../assets/UI_annotated.jpg';
import action1 from '../assets/reset_move.gif';
import action2 from '../assets/proceed_collect.gif';
import action3 from '../assets/drop.gif';

export function Rules() {
  return (
    <>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        How to Play (Single Player)
      </h3>
      <div className="mt-2 mb-6">
        <p className="text-sm">
          The goal of the game is to collect as many items as possible to maximize your score.
        </p>
        {/* <img className="w-500px" src={UI} alt="Game UI" /> */}
        <p className="text-sm">
          There are two types of actions you can make on any turn:
        </p>
        <ul className="text-sm list-disc pl-5">
          <li>Move (+1 Turn): Drag your player icon to an adjacent cell (up, down, left, or right).</li>
          <li>{'Collect item (Does not take a turn): If there is an item (represented by a colored dot) in the cell you are on, you can click it to collect it.'}</li>
        </ul>
        <p className="text-sm">
          {'Once you choose an action, you can lock it in and proceed to the next turn using the \'Proceed\' button.'}
        </p>
        {/* <img src={action1} alt="Click 'Reset' to revert to the previous position." className="my-4 w-400px" /> */}
        {/* <p className="text-sm">
        Click "Reset" to revert to the previous position.<br />
        Note: "Reset" does not increase your score.
        </p> */}
        {/* <img src={action2} alt="Click 'Proceed' to confirm the move. Collect items by clicking on them, then 'Collect'." className="my-4 w-400px" /> */}
		{/* <p className="text-sm">
		Click "Proceed" to confirm the move. <br />
    If you enter a grid square containing an item, click on the item displayed in the right corner, then click the item to add the item to your bag.
		</p>
        <img src={action3} alt="Click on an item to drop it from your bag." className="my-4 w-400px" />
        <p className="text-sm">
          If your bag is full (indicated by "Bag Total: n/n") or if you want to remove an item from your bag: <br />
          Click on the item you want to remove; for example, if you want to drop the red item, click "1/1 red." <br />
          Then click "Drop" to remove the item from your bag.
        </p>
        <br /> */}
        <p className="text-sm">
          {'You will be playing three setups total, playing each setup twice.'}
        </p>
      </div>
    </>
  );
}
