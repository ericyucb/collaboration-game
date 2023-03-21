import React, { useState } from "react";

export function Player() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  return (
    <div className='player' />
  );
}