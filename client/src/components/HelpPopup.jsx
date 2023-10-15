import React from 'react'
import {
	usePlayer,
} from '@empirica/core/player/classic/react'

import { Rules } from './Rules'

import '../css/HelpPopup.css'

export function HelpButton() {
  const player = usePlayer();

  return (
    <div className='help hover:brightness-90 cursor-pointer' onClick={() => player.stage.set('help', true)}>?</div>
  )
}

export function HelpPopup() {
  const player = usePlayer();

  return (
    <div>
      <div className='help-popup'>
        <div className='help-popup-content'>
          <Rules />
        </div>
        <svg className='close-popup' onClick={() => player.stage.set('help', false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </div>
      <div className='help-popup-overlay' onClick={() => player.stage.set('help', false)} />
    </div>
  )
}