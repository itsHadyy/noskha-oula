export const childTest = {
  type: 'child',
  archetypes: ['explorer', 'storyteller', 'builder', 'dreamer'],
  sections: [
    {
      id: 'curiosity',
      title: 'Curiosity',
      emoji: '🔍',
      questions: [
        {
          id: 'c1',
          text: 'When you find something new outside, you...',
          options: [
            { text: 'Run to touch and explore it right away', weights: { explorer: 3, storyteller: 1, builder: 1, dreamer: 0 } },
            { text: 'Make up a story about where it came from', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 2 } },
            { text: 'Try to figure out how it works or what it is', weights: { explorer: 1, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'Imagine it belongs to a magical creature', weights: { explorer: 0, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 'c2',
          text: 'You have a free afternoon with nothing planned. You most likely...',
          options: [
            { text: 'Go outside and look for something to discover', weights: { explorer: 3, storyteller: 0, builder: 1, dreamer: 1 } },
            { text: 'Write or draw a story you\'ve been thinking about', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 2 } },
            { text: 'Build or make something with whatever you can find', weights: { explorer: 1, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'Daydream about a world you wish you could visit', weights: { explorer: 1, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 'c3',
          text: 'At the library, the book that catches your eye is about...',
          options: [
            { text: 'Amazing animals in wild places', weights: { explorer: 3, storyteller: 0, builder: 1, dreamer: 1 } },
            { text: 'A kid who goes on a big adventure', weights: { explorer: 1, storyteller: 3, builder: 0, dreamer: 1 } },
            { text: 'How things are invented and made', weights: { explorer: 1, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'A hidden magical world nobody knows about', weights: { explorer: 0, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 'c4',
          text: 'You see a hole in a fence in your neighborhood. You...',
          options: [
            { text: 'Peek through to see what\'s on the other side', weights: { explorer: 3, storyteller: 1, builder: 0, dreamer: 1 } },
            { text: 'Think about the secret story of who made that hole', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 2 } },
            { text: 'Wonder how you could fix or improve the fence', weights: { explorer: 0, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'Imagine it\'s a portal to somewhere enchanted', weights: { explorer: 1, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 'c5',
          text: 'When you learn something surprising, you usually...',
          options: [
            { text: 'Want to go and see it for yourself immediately', weights: { explorer: 3, storyteller: 0, builder: 1, dreamer: 0 } },
            { text: 'Tell someone a story using that new fact', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 1 } },
            { text: 'Think about how you could use or test it', weights: { explorer: 1, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'Lie in bed later thinking about all the possibilities', weights: { explorer: 0, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
      ],
    },
    {
      id: 'imagination',
      title: 'Imagination',
      emoji: '✨',
      questions: [
        {
          id: 'i1',
          text: 'When you play pretend, your favorite role is...',
          options: [
            { text: 'A brave explorer discovering new lands', weights: { explorer: 3, storyteller: 1, builder: 0, dreamer: 1 } },
            { text: 'The narrator who decides what happens next', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 2 } },
            { text: 'An inventor creating gadgets to solve problems', weights: { explorer: 0, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'A wizard living in a floating castle', weights: { explorer: 1, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 'i2',
          text: 'If you could design your dream bedroom, it would have...',
          options: [
            { text: 'Maps, binoculars, and a tent for indoor camping', weights: { explorer: 3, storyteller: 0, builder: 1, dreamer: 0 } },
            { text: 'A cozy reading nook with a curtain and fairy lights', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 2 } },
            { text: 'A workshop corner with tools and materials to build things', weights: { explorer: 0, storyteller: 0, builder: 3, dreamer: 1 } },
            { text: 'A ceiling painted like the night sky with glow-in-the-dark stars', weights: { explorer: 1, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 'i3',
          text: 'You\'re drawing a picture. What do you draw?',
          options: [
            { text: 'A map of a real or imaginary place I\'d like to explore', weights: { explorer: 3, storyteller: 1, builder: 0, dreamer: 1 } },
            { text: 'Characters from a story I\'m making up', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 2 } },
            { text: 'A machine or invention I wish existed', weights: { explorer: 0, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'A beautiful world that couldn\'t really exist', weights: { explorer: 1, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 'i4',
          text: 'A new kid at school asks what you like to do for fun. You say...',
          options: [
            { text: 'Explore parks, trails, or new places with my family', weights: { explorer: 3, storyteller: 0, builder: 1, dreamer: 0 } },
            { text: 'Write stories, comics, or make up plays with friends', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 1 } },
            { text: 'Build things—models, robots, games, anything really', weights: { explorer: 0, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'Read, listen to music, and let my mind wander', weights: { explorer: 1, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 'i5',
          text: 'You find an old box in the attic. Your first thought is...',
          options: [
            { text: 'Open it fast—there might be something amazing inside!', weights: { explorer: 3, storyteller: 0, builder: 1, dreamer: 0 } },
            { text: 'Who owned it? What\'s their story?', weights: { explorer: 1, storyteller: 3, builder: 0, dreamer: 1 } },
            { text: 'What could I make out of this box?', weights: { explorer: 0, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'Maybe it holds something magical or from another world', weights: { explorer: 1, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
      ],
    },
    {
      id: 'social',
      title: 'Social Style',
      emoji: '🤝',
      questions: [
        {
          id: 's1',
          text: 'At a birthday party, you\'re most likely found...',
          options: [
            { text: 'Organizing a game or activity for everyone', weights: { explorer: 3, storyteller: 0, builder: 1, dreamer: 0 } },
            { text: 'In a corner telling a funny or spooky story', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 1 } },
            { text: 'Helping set up decorations or fix something that broke', weights: { explorer: 0, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'Quietly watching and taking it all in', weights: { explorer: 1, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 's2',
          text: 'When a friend is sad, you usually...',
          options: [
            { text: 'Suggest going outside to do something active together', weights: { explorer: 3, storyteller: 0, builder: 1, dreamer: 0 } },
            { text: 'Make up a funny or hopeful story to cheer them up', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 1 } },
            { text: 'Try to fix or solve whatever the problem is', weights: { explorer: 0, storyteller: 0, builder: 3, dreamer: 1 } },
            { text: 'Sit quietly with them so they don\'t feel alone', weights: { explorer: 0, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 's3',
          text: 'You prefer working on a project...',
          options: [
            { text: 'With one adventure-loving friend', weights: { explorer: 3, storyteller: 0, builder: 1, dreamer: 0 } },
            { text: 'With a group, so there are more ideas to use in the story', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 1 } },
            { text: 'By yourself so you can focus completely', weights: { explorer: 1, storyteller: 0, builder: 3, dreamer: 1 } },
            { text: 'Alone in a peaceful spot where I can imagine freely', weights: { explorer: 0, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 's4',
          text: 'When it\'s your turn to choose the game at recess, you pick...',
          options: [
            { text: 'Something active and outdoorsy like tag or hide-and-seek', weights: { explorer: 3, storyteller: 0, builder: 1, dreamer: 0 } },
            { text: 'A role-play game with characters and a story', weights: { explorer: 1, storyteller: 3, builder: 0, dreamer: 1 } },
            { text: 'Building or engineering something with whatever\'s around', weights: { explorer: 0, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'Something calm like cloud watching and guessing shapes', weights: { explorer: 0, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 's5',
          text: 'You get to invite one person on your dream trip. You pick...',
          options: [
            { text: 'A brave friend who\'s up for any adventure', weights: { explorer: 3, storyteller: 0, builder: 1, dreamer: 0 } },
            { text: 'A creative friend who tells amazing stories along the way', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 1 } },
            { text: 'A handy friend who can help figure out any problem', weights: { explorer: 1, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'A calm friend who loves to notice beautiful little things', weights: { explorer: 0, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
      ],
    },
    {
      id: 'learning',
      title: 'Learning Preference',
      emoji: '🧠',
      questions: [
        {
          id: 'l1',
          text: 'You\'re learning something new at school. You understand it best when...',
          options: [
            { text: 'You try it yourself and move around while doing it', weights: { explorer: 3, storyteller: 0, builder: 1, dreamer: 0 } },
            { text: 'The teacher uses a story or character to explain it', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 2 } },
            { text: 'You get to experiment, build, or take things apart', weights: { explorer: 1, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'You have time to sit quietly and think it through', weights: { explorer: 0, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 'l2',
          text: 'Your favorite part of school projects is...',
          options: [
            { text: 'Going on a field trip or researching in the real world', weights: { explorer: 3, storyteller: 1, builder: 0, dreamer: 0 } },
            { text: 'Writing the story or creating the presentation', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 1 } },
            { text: 'Building the model or making the prototype', weights: { explorer: 0, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'Designing the artwork and making it beautiful', weights: { explorer: 1, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 'l3',
          text: 'When you make a mistake, you...',
          options: [
            { text: 'Try a different approach right away—mistakes are clues!', weights: { explorer: 3, storyteller: 0, builder: 2, dreamer: 0 } },
            { text: 'Imagine how the story could have gone differently', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 2 } },
            { text: 'Analyze what went wrong and plan the next attempt', weights: { explorer: 1, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'Feel it deeply for a while, then slowly figure it out', weights: { explorer: 0, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 'l4',
          text: 'You\'re most proud when...',
          options: [
            { text: 'You discover or experience something for the first time', weights: { explorer: 3, storyteller: 0, builder: 1, dreamer: 0 } },
            { text: 'Someone says your story or idea moved them', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 2 } },
            { text: 'Something you built actually works', weights: { explorer: 1, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'You find exactly the right word or image for a feeling', weights: { explorer: 0, storyteller: 2, builder: 0, dreamer: 3 } },
          ],
        },
        {
          id: 'l5',
          text: 'If you could spend a whole school day doing one thing, you\'d choose...',
          options: [
            { text: 'An outdoor science expedition in the woods or a park', weights: { explorer: 3, storyteller: 0, builder: 1, dreamer: 0 } },
            { text: 'A storytelling workshop where you write and perform your tale', weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 1 } },
            { text: 'An engineering challenge where you build a real structure', weights: { explorer: 0, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: 'A quiet art day with music and total freedom to imagine', weights: { explorer: 0, storyteller: 1, builder: 0, dreamer: 3 } },
          ],
        },
      ],
    },
  ],
}
