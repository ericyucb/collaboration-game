import { usePlayer } from '@empirica/core/player/classic/react'
import React, { useState, useRef } from 'react'
import { Button } from '../components/Button'
import { Question } from '../components/Question'
import { EXITQUESTIONS } from '../../../settings/ExitQuestions'
import { Questionaire } from '../components/Questionaire'

import '../css/Questionaire.css'
import '../css/ExitSurvey.css'

export function ExitSurvey({ next }) {
  return (
    <div className='exit-survey'>
      <Questionaire title='Exit Survey' setupName='exit' questions={EXITQUESTIONS} submit={next} categories={true} />
    </div>
  )
}