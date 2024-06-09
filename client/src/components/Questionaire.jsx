import React, { useRef } from 'react'
import {
	usePlayer,
} from '@empirica/core/player/classic/react'

import { Button } from '../components/Button'

import { Question } from './Question'

import '../css/Questionaire.css'

export function Questionaire({ title='', setupName, questions, submit, categories=false, disabled=false }) {
  const player = usePlayer();
  const questionaire = player.get(`${setupName} questionaire`)
  const submitted = player.get(`${setupName} submit check`)

  const topRef = useRef(null)

  const handleSubmit = event => {
		event.preventDefault()
    const surveyComplete = categories ? 
      Object.values(questionaire).every(category =>
        Object.values(category).every(
          answer => answer !== null && (Array.isArray(answer) ? answer.length !== 0 : answer.trim() !== '')
        )
      ) :
      questions.every(question => question.answer == questionaire[question.tag])
    
    if (surveyComplete) {
      player.set(`${setupName} complete`, true)
      submit()
    } else {
      topRef.current.scrollIntoView({ behavior: "smooth" })
      player.set(`${setupName} submit check`, true)
    }
	}

  const setAnswer = (value, category, tag, multiselect=false) => {
    const questionaireCopy = {...questionaire}
    const categoryData = category === null ? questionaireCopy : questionaireCopy[category]

    if (multiselect) {
      const target = value
      if (categoryData[tag] === null) {
        categoryData[tag] = []
      }

      if (target.checked) {
        categoryData[tag].push(target.value)
        categoryData[tag].sort()
      } else {
        categoryData[tag] = categoryData[tag].filter(e => e != target.value)
      }
    } else {
      categoryData[tag] = value
    }
    
    player.set(`${setupName} questionaire`, questionaireCopy)
  }

  const renderQuestionList = (questions, category) => questions.map(question =>
    <Question
      question={question.question}
      type={question.type}
      tag={question.tag}
      choices={question.type == 'fr' ? [] : question.choices}
      value={category === null ? questionaire[question.tag] : questionaire[category][question.tag]}
      solution={'answer' in question ? {answer: question.answer, explanation: question.explanation} : null}
      format={{direction: question.direction, disabled: disabled, submitted: submitted}}
      setAnswer={(value, tag) => setAnswer(value, category, tag, question.type == 'ms')}
      key={`${question.tag}`}
    />
  )

  return (
    <>
      <h1 className='exit-survey-title' ref={topRef}>{title}</h1>
      <p className={`exit-survey-blurb${ submitted && !disabled ? ' blurb-bold' : ''}`}>Please answer all of the following questions.</p>
      <div className='questionaire'>
        <div className='questions'>
          {
            categories ?
              questions.map(category => 
                <>
                  <h2 className='category-title' key={`${category.title}`}>{category.title}</h2>
                  {
                    'blurb' in category.questions ?
                    <p>{category.blurb}</p> :
                    null
                  }
                  {renderQuestionList(category.questions, category.title)}
                </>
              ) :
              renderQuestionList(questions, null)
          }
        </div>
        {
          disabled ? 
          null :
          (
            <>
              <br />
              <Button className='intro-submit-btn' primary handleClick={handleSubmit}>
                <p>Submit</p>
              </Button>
            </>
          )
        }
      </div>
    </>
  )
}