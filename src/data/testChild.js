export const childTest = {
  type: 'child',
  archetypes: ['sharing', 'emotional_regulation', 'empathy', 'patience', 'honesty'],
  sections: [
    {
      id: 'sharing',
      title: 'Sharing',
      emoji: 'Users',
      questions: [
        {
          id: 'sh1',
          text: 'You are playing with your favorite toy, and another child asks to play with it. Do you let them play too?',
          options: [
            { text: 'Yes', weights: { sharing: 3, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
          ],
        },
        {
          id: 'sh2',
          text: 'You have a snack, but your friend does not have one. Do you offer to share with them?',
          options: [
            { text: 'Yes', weights: { sharing: 3, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
          ],
        },
        {
          id: 'sh3',
          text: 'Someone asks to borrow your toy when you still want to use it. Do you say no?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 3, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
          ],
        },
        {
          id: 'sh4',
          text: 'Other children want to join your game. Do you let them play with you?',
          options: [
            { text: 'Yes', weights: { sharing: 3, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
          ],
        },
      ],
    },
    {
      id: 'emotional_regulation',
      title: 'Emotional Regulation',
      emoji: 'Zap',
      questions: [
        {
          id: 'er1',
          text: 'Your game does not go the way you wanted. Do you yell or scream?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 3, empathy: 0, patience: 0, honesty: 0 } },
          ],
        },
        {
          id: 'er2',
          text: 'When you feel very angry, do you hit, kick, or throw things?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 3, empathy: 0, patience: 0, honesty: 0 } },
          ],
        },
        {
          id: 'er3',
          text: 'When something feels hard or confusing, do you ask someone for help?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 3, empathy: 0, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
          ],
        },
        {
          id: 'er4',
          text: 'When you are very upset, do you try to use words to explain how you feel instead of acting out?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 3, empathy: 0, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
          ],
        },
      ],
    },
    {
      id: 'empathy',
      title: 'Empathy',
      emoji: 'Heart',
      questions: [
        {
          id: 'em1',
          text: 'When someone feels sad, do you say kind words to comfort them?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 3, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
          ],
        },
        {
          id: 'em2',
          text: 'When you see someone sitting alone, do you notice they may feel left out?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 3, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
          ],
        },
        {
          id: 'em3',
          text: 'If someone gets hurt after making a mistake, do you laugh at them?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 3, patience: 0, honesty: 0 } },
          ],
        },
        {
          id: 'em4',
          text: 'When a friend is upset, do you try to understand how they feel?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 3, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
          ],
        },
      ],
    },
    {
      id: 'patience',
      title: 'Patience',
      emoji: 'Clock',
      questions: [
        {
          id: 'pa1',
          text: 'When playing a game, do you wait for your turn?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 3, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
          ],
        },
        {
          id: 'pa2',
          text: 'When you have to wait for something you want, do you become upset?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 3, honesty: 0 } },
          ],
        },
        {
          id: 'pa3',
          text: 'When someone else is speaking, do you interrupt before they finish talking?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 3, honesty: 0 } },
          ],
        },
        {
          id: 'pa4',
          text: 'When you want something right away, do you rush other people?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 3, honesty: 0 } },
          ],
        },
      ],
    },
    {
      id: 'honesty',
      title: 'Honesty',
      emoji: 'ShieldCheck',
      questions: [
        {
          id: 'ho1',
          text: 'When you make a mistake, do you admit it honestly?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 3 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
          ],
        },
        {
          id: 'ho2',
          text: 'If something breaks and it was your fault, do you blame someone else?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 3 } },
          ],
        },
        {
          id: 'ho3',
          text: 'When you do something wrong, do you try to hide it so nobody finds out?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 3 } },
          ],
        },
        {
          id: 'ho4',
          text: 'After telling the truth, do you feel proud or good inside?',
          options: [
            { text: 'Yes', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 3 } },
            { text: 'No', weights: { sharing: 0, emotional_regulation: 0, empathy: 0, patience: 0, honesty: 0 } },
          ],
        },
      ],
    },
  ],
}
