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

  const setAnswer = (value, category, tag) => {
    const feedbackCopy = {...feedback}
    feedbackCopy[category][tag] = value
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

  const renderQuestion = (question, category, questionNum) => {
    if (question.type == 'mc' || question.type == 'likert') {
      return (
        <Question
          question={question.question}
          type={question.type}
          tag={question.tag}
          num={questionNum}
          choices={question.choices}
          value={feedback[category][question.tag]}
          format={{ direction: question.direction }}
          setAnswer={(value, tag) => setAnswer(value, category, tag)}
          key={questionNum}
        />
      )
    } else if (question.type == 'fr') {
      return (
        <Question
          question={question.question}
          type={question.type}
          tag={question.tag}
          value={feedback[category][question.tag]}
          format={{ direction: question.direction }}
          setAnswer={(value, tag) => setAnswer(value, category, tag)}
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
        {
          EXITQUESTIONS.map(category => (
            <>
              <h2 className='category-title'>{category.title}</h2>
              <div className='exit-questions'>{category.questions.map((question, index) => renderQuestion(question, category.title, index))}</div>
            </>
          ))
        }
        <Button className='intro-submit-btn' primary handleClick={handleSubmit}>
          <p>Submit</p>
        </Button>
      </div>
    </div>
  )
}