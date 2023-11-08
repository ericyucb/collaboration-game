export const QUESTIONS = [
  {
    question: 'Which of these is not a possible action?',
    choices: [
      'Move',
      'Collect',
      'Drop',
      'Skip',
    ],
    answer: 3,
    explanation: 'The possible actions are \'Move,\' \'Collect,\' and \'Drop.\'',
    direction: 'row',
  },
  {
    question: 'When not on the edge of the board, how many directions can you move in?',
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
    choices: [
      'Click the item in the cell the player is in, click the \'Collect\' button, and then click the \'Proceed\' button.',
      'Click the item in the bag, click the \'Collect\' button, and then click the \'Proceed\' button.',
    ],
    answer: 0,
    explanation: 'Note that there can be more than one item in a cell, so click the one you want to pick up!',
    direction: 'column',
  },
  {
    question: 'How do you drop an item?',
    choices: [
      'Click the item in the cell the player is in, click the \'Drop\' button, and then click the \'Proceed\' button.',
      'Click the item in the bag, click the \'Drop\' button, and then click the \'Proceed\' button.',
    ],
    answer: 1,
    explanation: 'Note that you can drop an item onto a cell that already has an item!',
    direction: 'column',
  },
  {
    question: 'Which of the following is the best number of turns?',
    choices: [
      '32',
      '12',
      '15',
      '23',
    ],
    answer: 1,
    explanation: 'A lower number of turns is better.',
    direction: 'row',
  },
  {
    question: 'What is the maximum number of items that can be in a cell?',
    choices: [
      '0',
      '1',
      '2',
      'Infinite',
    ],
    answer: 3,
    explanation: 'There is no limit to the number of items in a cell.',
    direction: 'row',
  },
]