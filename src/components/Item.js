import React from "react";

export function Magazine({ items, corner, live=false, selectItem=item=>{} }) {
  return (
    <div className={`magazine${corner ? ' corner' : ''}`}>
      {items.length === 0 ? null : items.map((item, index) => <Item key={index} type={item} live={live} selectItem={selectItem} />)}
    </div>
  )
}

export function Item({ type, live=false, selectItem=item=>{} }) {
  const colors = ['pink', 'red', 'blue', 'yellow', 'green'];

  return (
    live ?
    <div className='item live-item' style={{backgroundColor: colors[type]}} onClick={() => selectItem(type)} /> :
    <div className='item' style={{backgroundColor: colors[type]}} />
  );
}