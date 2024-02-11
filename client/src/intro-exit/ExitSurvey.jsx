import { usePlayer } from '@empirica/core/player/classic/react'
import React, { useState } from 'react'
import { Button } from '../components/Button'
import { Question } from '../components/Question'
import { EXITQUESTIONS } from '../../../settings/ExitQuestions'

import '../css/Questionaire.css'
import '../css/ExitSurvey.css'

export function ExitSurvey({ next }) {
	const player = usePlayer()
  const feedback = player.get('exitSurvey')
  const [ failedSubmit, setFailedSubmit ] = useState(false)

  const setAnswer = (value, tag) => {
    const feedbackCopy = {...feedback}
    feedbackCopy[tag] = value
    player.set('exitSurvey', feedbackCopy)
  }

	const handleSubmit = event => {
		event.preventDefault()
    const surveyComplete = Object.values(feedback).every(e => e.toString().trim().length != 0)
    if (surveyComplete) {
      next()
    } else {
      setFailedSubmit(true)
    }
	}

  const renderQuestion = (question, questionNum) => {
    if (question.type == 'mc' || question.type == 'likert') {
      return (
        <Question
          question={question.question}
          type={question.type}
          tag={question.tag}
          num={questionNum}
          choices={question.choices}
          value={feedback[question.tag]}
          format={{ direction: question.direction }}
          setAnswer={setAnswer}
          key={questionNum}
        />
      )
    } else if (question.type == 'fr') {
      return (
        <Question
          question={question.question}
          type={question.type}
          tag={question.tag}
          value={feedback[question.tag]}
          format={{ direction: question.direction }}
          setAnswer={setAnswer}
          key={questionNum}
        />
      )
    }
  }

  return (
    <div className='exit-survey'>
      <h1 className='exit-survey-title'>Exit Survey</h1>
      <p className={`exit-survey-blurb${ failedSubmit ? ' blurb-bold' : ''}`}>Please answer all of the following questions.</p>
      <div className='questionaire'>
        <div className='exit-questions'>{EXITQUESTIONS.map(renderQuestion)}</div>
        <Button className='intro-submit-btn' primary handleClick={handleSubmit}>
          <p>Submit</p>
        </Button>
      </div>
    </div>
  )
}