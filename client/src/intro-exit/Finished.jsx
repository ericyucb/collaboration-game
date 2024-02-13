import React from "react";
import { usePlayer } from '@empirica/core/player/classic/react'

export function Finished() {
  const player = usePlayer()

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="font-medium text-gray-700">Finished</h2>
      <p className="mt-2 text-gray-500">Thank you for participating! Please enter the following code into MTurk: {player.id}</p>
    </div>
  );
}