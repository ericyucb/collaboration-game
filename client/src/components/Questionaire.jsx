import React from 'react'
import {
	usePlayer,
} from '@empirica/core/player/classic/react'

import { QUESTIONS } from '../../../settings/Questions'
import { Button } from '../components/Button'

import '../css/Questionaire.css'

export function Questionaire({ checkComplete }) {
  const player = usePlayer();
  const selected = player.get('questionaire')
  const submitted = player.get('submit check')

  const submitCheck = () => {
    player.set('submit check', true)
    if (QUESTIONS.every((question, index) => question.answer === selected[index])) {
      player.set('check complete', true)
    }
  }

  return (
    <div className='questionaire'>
      <div className='questions'>
        {
          QUESTIONS.map((question, questionNum) => (
            <Question
              question={question.question}
              choices={question.choices}
              answer={question.answer}
              explanation={question.explanation}
              direction={question.direction}
              num={questionNum}
              selected={selected}
              disabled={checkComplete}
              submitted={submitted}
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

export function Question({ question, choices, answer, explanation, direction, num, selected, disabled, submitted }) {
  const player = usePlayer();

  const onOptionChange = e => {
    const newSelected = [...selected]
    newSelected[num] = parseInt(e.target.value)
    player.set('questionaire', newSelected)
  }

  return (
    <div key={num} className={`question ${submitted ? (selected[num] === answer ? 'correct' : 'incorrect') : ''}`}>
      <p>{question}</p>
      <div className='choices' style={{
        flexDirection: direction,
        justifyContent: 'space-between'
      }}>
        {choices.map((choice, index) => (
          <div className='choice' key={index}>
            <input
              className='radio-button'
              type='radio'
              id={`Q${num}C${index}`}
              name={`Q${num}`}
              value={index}
              checked={selected[num] === index}
              disabled={disabled}
              onChange={onOptionChange}
            />
            <label className='radio-label' htmlFor={choice}>{choice}</label>
          </div>
        ))}
      </div>
      {
        submitted && selected[num] === answer ?
        <p>Correct! {explanation}</p> :
        null
      }
    </div>
  )
}