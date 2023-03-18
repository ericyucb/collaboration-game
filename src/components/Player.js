import React from "react";

export function Player({ number }) {
  return (
    <h1 className='player'>
      {`P${number}`}
    </h1>
  );
}