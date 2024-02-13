import React from 'react'
import {
	usePlayer,
} from '@empirica/core/player/classic/react'

import { INTROQUESTIONS } from '../../../settings/IntroQuestions'
import { Button } from '../components/Button'

import { Question } from './Question'

import '../css/Questionaire.css'

export function Questionaire({ checkComplete }) {
  const player = usePlayer();
  const questionaire = player.get('questionaire')
  const submitted = player.get('submit check')

  const submitCheck = () => {
    player.set('submit check', true)
    if (INTROQUESTIONS.every((question, index) => question.answer == questionaire[question.tag])) {
      player.set('check complete', true)
    }
  }

  const setAnswer = (value, tag) => {
    const questionaireCopy = {...questionaire}
    questionaireCopy[tag] = value
    player.set('questionaire', questionaireCopy)
  }

  return (
    <div className='questionaire'>
      <div className='questions'>
        {
          INTROQUESTIONS.map((question, questionNum) => (
            <Question
              question={question.question}
              type={question.type}
              tag={question.tag}
              choices={question.choices}
              value={questionaire[question.tag]}
              solution={{answer: question.answer, explanation: question.explanation}}
              format={{direction: question.direction, disabled: checkComplete, submitted: submitted}}
              setAnswer={setAnswer}
              key={questionNum}
            />
          ))
        }
      </div>
      {
        checkComplete ? 
        null :
        (
          <>
            <br />
            <Button className='intro-submit-btn' primary handleClick={submitCheck}>
              <p>Submit</p>
            </Button>
          </>
        )
      }
    </div>
  )
}