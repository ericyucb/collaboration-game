import React from "react";

export function Item({ type }) {
  const colors = ['pink', 'red', 'blue'];

  return (
    <div className='item' style={{backgroundColor: colors[type]}} />
  );
}