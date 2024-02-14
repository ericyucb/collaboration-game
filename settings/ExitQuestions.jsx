export const EXITQUESTIONS = [
  {
    'title': 'General Feedback',
    'questions': [
      {
        question: 'Rate your agreement with the following statement: The rules of this game were easy to understand.',
        tag: 'rules',
        type: 'likert',
        direction: 'row',
      },
      {
        question: 'Rate your agreement with the following statement: It was easy to perform well in this game.',
        tag: 'performance',
        type: 'likert',
        direction: 'row',
      },
      {
        question: 'What strategies did you find successful in this game?',
        tag: 'success',
        type: 'fr',
      },
      {
        question: 'What strategies did you find unsuccessful in this game?',
        tag: 'failure',
        type: 'fr',
      },
      {
        question: 'What feedback do you have for the game?',
        tag: 'feedback',
        type: 'fr',
      },
      {
        question: 'If you are reading this question, please select option 1 - Strongly Disagree.',
        tag: 'sanity',
        type: 'likert',
        direction: 'row',
      }
    ],
  },
  {
    'title': 'Strategy and Advice',
    'questions': [
      {
        question: 'Please provide a concise description of your approach to the game.',
        tag: 'approach',
        type: 'fr',
      },
      {
        question: 'Please select the strategy/strategies that best align with your approach to navigating the maze.',
        tag: 'strategy',
        type: 'ms',
        choices: [
          'Optimal Strategy: Prioritize speed and efficiency in navigating the maze.',
          'Explorer Strategy: Prioritize discovering the layout of the maze over reaching goals quickly.',
          'Conservative Strategy: Prioritize safe and familiar routes, avoiding exploration or deviation.',
          'Roamer Strategy: Frequently changing directions, reversing decisions, and using various strategies.',
          'Adapter Strategy: Players adapt their strategies based on the evolving game dynamics, displaying flexibility in decision-making and adjusting approaches as needed.'
        ],
        direction: 'column'
      },
      {
        question: 'How did your strategy change for the second round?',
        tag: 'change',
        type: 'fr',
      },
      {
        question: 'Which type of advice do you believe would most effectively improve your score?',
        tag: 'advice',
        type: 'mc',
        choices: [
          'Recommendations for the next optimal action',
          'Clear and specific information about the locations of objectives or resources'
        ],
        direction: 'row'
      }
    ],
  },
  {
    'title': 'Collaboration',
    'blurb': 'Imagine a scenario where you are paired with another player to play this game. Both of you have individual goals as well as shared goals, aiming to minimize the total number of steps taken. Assume there are limited chances for communication.',
    'questions': [
      {
        question: 'What information would you consider most critical to share with your partner?',
        tag: 'communication',
        type: 'fr'
      },
      {
        question: 'When approaching problem-solving in a collaborative setting, which strategy do you prefer?',
        tag: 'colab-strategy',
        type: 'mc',
        choices: [
          'Divide and Conquer: Each player focuses on different objectives; efficient but risks failure if one player cannot complete their tasks.',
          'Tackle Together: Focus on completing tasks as a duo; fosters teamwork but may increase the total number of steps taken.',
          'Flexible Approach Based on Scenario: Adapt strategy based on current needs; versatile but requires good judgment and communication.'
        ],
        direction: 'column'
      },
      {
        question: 'When prioritizing goals in a collaborative setting, which approach do you prefer?',
        tag: 'priority-approach',
        type: 'mc',
        choices: [
          'Equal Priority for Individual and Collaborative Goals: Ensures balanced effort towards all objectives but may lead to inefficiencies if one set of goals requires more resources than the other.',
          'Higher Priority for Collaborative Goals: Maximizes the benefit to the team and possibly the overall score, but individual goals might be neglected, potentially affecting personal scores or achievements.',
          'Higher Priority for Individual Goals: Focuses on personal achievements, which could lead to a higher individual score but may compromise the team\'s efficiency and overall success.'
        ],
        direction: 'column'
      }
    ],
  }
]