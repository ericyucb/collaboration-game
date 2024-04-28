import React from 'react'

const LIKERT_SCALE = ['1 - Strongly Disagree', '2 - Disagree', '3 - Neutral', '4 - Agree', '5 - Strongly Agree']
const SEVEN_SCALE = ['1', '2', '3 ', '4', '5 ', '6', '7']


export function Question({ question, type, tag, choices=[], value=null, solution={}, format, setAnswer }) {
  const answerSpace = (type, tag, choices, value, direction, disabled, setAnswer) => {
    if (type === 'likert') choices = LIKERT_SCALE
    if (type === 'seven') choices = SEVEN_SCALE

    if (type === 'likert' || type === 'mc' || type === 'seven') {
      return (
        <div className='choices' style={{
          flexDirection: direction,
          justifyContent: 'space-between'
        }}>
          {choices.map((choice, index) => (
            <div className='choice' key={index}>
              <input
                className='radio-button'
                type='radio'
                id={`Q-${tag} C${index}`}
                name={`Q-${tag}`}
                value={index}
                checked={index == value}
                disabled={disabled}
                onChange={e => setAnswer(e.target.value, tag)}
              />
              <label className='radio-label' htmlFor={choice}>{choice}</label>
            </div>
          ))}
        </div>
      )
    } else if (type === 'ms') {
      return (
        <div className='choices' style={{
          flexDirection: direction,
          justifyContent: 'space-between'
        }}>
          {choices.map((choice, index) => (
            <div className='choice' key={index}>
              <input
                className='radio-button'
                type='checkbox'
                id={`Q-${tag} C${index}`}
                name={`Q-${tag}`}
                value={index}
                disabled={disabled}
                onChange={e => setAnswer(e.target, tag)}
              />
              <label className='radio-label' htmlFor={choice}>{choice}</label>
            </div>
          ))}
        </div>
      )
    } else if (type === 'fr') {
      return (
        <textarea className='text-area' onChange={e => setAnswer(e.target.value, tag)} />
      )
    }
  }

  const answer = solution ? solution.answer : null
  const explanation = solution ? solution.explanation : null
  const direction = format.direction
  const disabled = solution ? format.disabled : false
  const submitted = solution ? format.submitted : false

  return (
    <div className={`question ${submitted && answer !== null ? (value == answer ? 'correct' : 'incorrect') : ''}`} key={tag}>
      <p className='question-text'>{question}</p>
      {answerSpace(type, tag, choices, value, direction, disabled, setAnswer)}
      {
        submitted && answer !== null && value == answer ?
        <p>Correct! {explanation}</p> :
        null
      }
    </div>
  )
}