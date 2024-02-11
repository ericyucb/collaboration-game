// export function Questions({ question, choices, answer, explanation, direction, num, selected, disabled, submitted }) {
//   const player = usePlayer();

//   const onOptionChange = e => {
//     const newSelected = [...selected]
//     newSelected[num] = parseInt(e.target.value)
//     player.set('questionaire', newSelected)
//   }

//   return (
//     <div key={num} className={`question ${submitted ? (selected[num] === answer ? 'correct' : 'incorrect') : ''}`}>
//       <p>{question}</p>
//       <div className='choices' style={{
//         flexDirection: direction,
//         justifyContent: 'space-between'
//       }}>
//         {choices.map((choice, index) => (
//           <div className='choice' key={index}>
//             <input
//               className='radio-button'
//               type='radio'
//               id={`Q${num}C${index}`}
//               name={`Q${num}`}
//               value={index}
//               checked={selected[num] === index}
//               disabled={disabled}
//               onChange={onOptionChange}
//             />
//             <label className='radio-label' htmlFor={choice}>{choice}</label>
//           </div>
//         ))}
//       </div>
//       {
//         submitted && selected[num] === answer ?
//         <p>Correct! {explanation}</p> :
//         null
//       }
//     </div>
//   )
// }

// export function ExitQuestion({ question, type, num, direction='', feedback }) {
//   const player = usePlayer();

//   const onChange = e => {
//     const newFeedback = [...feedback]
//     newFeedback[num] = e.target.value
//     player.set('exitSurvey', newFeedback)
//   }

//   const inputField = (type, choices=null) => {
//     if (type === 'likert' || type === 'choices') {
//       if (type === 'likert') {
//         choices = ['1 - Strongly Disagree', '2 - Disagree', '3 - Neutral', '4 - Agree', '5 - Strongly Agree']
//       }

//       return <div className='choices' style={{
//         flexDirection: direction,
//         justifyContent: 'space-between'
//       }}>
//         {choices.map((choice, index) => (
//           <div className='choice' key={index}>
//             <input
//               className='radio-button'
//               type='radio'
//               id={`Q${num}C${index}`}
//               name={`Q${num}`}
//               value={index}
//               checked={selected[num] === index}
//               disabled={disabled}
//               onChange={onChange}
//             />
//             <label className='radio-label' htmlFor={choice}>{choice}</label>
//           </div>
//         ))}
//       </div>
//     } else if (type === 'fr') {
//       return <input type="text" />
//     }
//   }

//   return (
//     <div key={num} className={`question`}>
//       <p>{question}</p>
//       {inputField(type, choices)}
//     </div>
//   )
// }

import React from 'react'

const LIKERT_SCALE = ['1 - Strongly Disagree', '2 - Disagree', '3 - Neutral', '4 - Agree', '5 - Strongly Agree']

export function Question({ question, type, tag, choices=[], value=null, solution={}, format, setAnswer}) {
  const answerSpace = (type, tag, choices, value, direction, disabled, setAnswer) => {
    if (type === 'likert') choices = LIKERT_SCALE

    if (type === 'likert' || type === 'mc') {
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
    <div className={`question ${submitted && answer !== null ? (value == answer ? 'correct' : 'incorrect') : ''}`}>
      <p>{question}</p>
      {answerSpace(type, tag, choices, value, direction, disabled, setAnswer)}
      {
        submitted && answer !== null && value == answer ?
        <p>Correct! {explanation}</p> :
        null
      }
    </div>
  )
}