import React from "react";
import { COLORS } from "../settings";

export function Magazine({ items, corner, live=false, selectItem=item=>{} }) {
  return (
    <div className={`magazine${corner ? ' corner' : ''}`}>
      {items.length === 0 ? null : items.map((item, index) => <Item key={index} type={item} live={live} selectItem={selectItem} />)}
    </div>
  )
}

export function Item({ type, live=false, selectItem=item=>{} }) {
  return (
    live ?
    <div className='item live-item' style={{backgroundColor: COLORS[type]}} onClick={() => selectItem(type)} /> :
    <div className='item' style={{backgroundColor: COLORS[type]}} />
  );
}