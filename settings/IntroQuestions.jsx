export const INTROQUESTIONS = [
  {
    question: 'Which of these is not a possible action?',
    tag: 'action',
    type: 'mc',
    choices: [
      'Move',
      'Collect',
      'Skip',
    ],
    answer: 2,
    explanation: 'The possible actions are \'Move,\' and \'Collect,\'',
    direction: 'row',
  },
  {
    question: 'When not on the edge of the board, how many directions can you move in?',
    tag: 'movement',
    type: 'mc',
    choices: [
      '2',
      '4',
      '8',
    ],
    answer: 1,
    explanation: 'If not on the edge of the board, you can move up, down, left, or right.',
    direction: 'row',
  },
  {
    question: 'What is the maximum number of cells you can see at any given point?',
    tag: 'vision',
    type: 'mc',
    choices: [
      '4',
      '8',
      '9',
      'All of the cells'
    ],
    answer: 2,
    explanation: 'If not on the edge of the board, you can see in the eight cells around you and your own cell. The \'Toggle Vision\' button will not exist in future rounds.',
    direction: 'row',
  },
  {
    question: 'How do you collect an item?',
    tag: 'collect',
    type: 'mc',
    choices: [
      'Click the item in the cell the player is in.',
      'Click the item in the bag, click the \'Collect\' button, and then click the \'Proceed\' button.',
    ],
    answer: 0,
    explanation: 'Correct!',
    direction: 'column',
  },
  {
    question: 'Which of the following is the best possible score?',
    tag: 'score',
    type: 'mc',
    choices: [
      '32',
      '12',
      '15',
      '23',
    ],
    answer: 0,
    explanation: 'The higher the score, the better.',
    direction: 'row',
  },
  {
    question: 'What is the maximum number of items that can be in a cell?',
    tag: 'items',
    type: 'mc',
    choices: [
      '0',
      '1',
      '2',
      'Infinite',
    ],
    answer: 1,
    explanation: 'There can be only one item in a cell.',
    direction: 'row',
  },
]