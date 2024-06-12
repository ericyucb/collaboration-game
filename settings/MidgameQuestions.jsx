export const MIDGAMEQUESTIONS = [
  {
    'title': 'Strategy and Advice',
    'questions': [
    {
      question: "How did you approach playing this specific board? What plans or methods did you employ while playing?",
      tag: "gameplay-description",
      type: "fr"
    },
    {
      question: "If you were to give one piece of advice to another player about this board, what would it be?",
      tag: "advice",
      type: "fr"
    },
    {
      question: "On a scale from 1 to 7, please select the option that best describes your approach to playing the game (1- Explorer, 7- Conservative):\n\n1: Explorer: I like to explore new directions on the board, even if I've found a good strategy already.\n7: Conservative: Once I've found a good strategy, I stick with it and go after pieces I need, even if I've been in that area before.",
      tag: "strategy-preference",
      type: "seven"
    },
    {
      question: "Which strategy do you think is the most effective for this board?",
      tag: "strategy-effectiveness",
      type: "mc",
      choices: [
        "Explorer: I like to explore new directions on the board, even if I've found a good strategy already.",
        "Conservative: Once I've found a good strategy, I stick with it and go after pieces I need, even if I've been in that area before."
      ],
      direction: "column"
    },
    {
      question: "How did your strategy change for the second attempt of this board?",
      tag: "strategy-change",
      type: "fr"
    },
    {
      question: "What strategies can be applied for all boards throughout this Maze Game?",
      tag: "universal-strategies",
      type: "fr"
    },
    {
      question: "Which type of advice do you believe would most effectively improve your score?",
      tag: "effective-advice",
      type: "mc",
      choices: [
        "Recommendations for the next optimal action",
        "Clear and specific information about the locations of objectives or resources"
      ],
      direction: "row"
    }
    ],
  },
];