import React from "react";

export function Item({ type, display = 'center' }) {
  const colors = ['pink', 'red', 'blue'];

  return (
    <div className='item' style={{backgroundColor: colors[type]}} />
  );
}