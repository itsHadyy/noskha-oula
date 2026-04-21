export const parentTest = {
  type: 'parent',
  archetypes: ['nurturer', 'coach', 'guide', 'companion'],
  sections: [
    {
      id: 'communication',
      title: 'Communication Style',
      emoji: '💬',
      questions: [
        {
          id: 'p1',
          text: 'When your child comes to you upset, your first instinct is to...',
          options: [
            { text: 'Pull them close and hold them until they feel safe', weights: { nurturer: 3, coach: 0, guide: 1, companion: 1 } },
            { text: 'Ask what happened and help them make a plan', weights: { nurturer: 1, coach: 3, guide: 1, companion: 0 } },
            { text: 'Explain the situation calmly to give them perspective', weights: { nurturer: 0, coach: 1, guide: 3, companion: 0 } },
            { text: 'Sit beside them and let them talk when they\'re ready', weights: { nurturer: 1, coach: 0, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 'p2',
          text: 'How do you typically start an important conversation with your child?',
          options: [
            { text: 'I make sure they\'re comfortable and feel loved first', weights: { nurturer: 3, coach: 0, guide: 1, companion: 1 } },
            { text: 'I lay out the topic clearly and what we\'re trying to figure out', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'I give context and background so they can understand fully', weights: { nurturer: 1, coach: 0, guide: 3, companion: 0 } },
            { text: 'I wait for them to bring it up naturally in their own time', weights: { nurturer: 0, coach: 0, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 'p3',
          text: 'Your child interrupts you mid-task with a long story about school. You...',
          options: [
            { text: 'Stop immediately—their stories are the whole point', weights: { nurturer: 3, coach: 0, guide: 0, companion: 2 } },
            { text: 'Listen briefly and then redirect to a better time to talk', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'Ask a question to understand the key point quickly', weights: { nurturer: 0, coach: 1, guide: 3, companion: 0 } },
            { text: 'Pause what you\'re doing and listen until they\'re done', weights: { nurturer: 1, coach: 0, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 'p4',
          text: 'When your child says "I can\'t do it," you respond with...',
          options: [
            { text: '"You can! I believe in you, and I\'m right here with you."', weights: { nurturer: 3, coach: 1, guide: 0, companion: 1 } },
            { text: '"Let\'s break it down. What\'s the first small step?"', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: '"What specifically feels hard? Let\'s understand why first."', weights: { nurturer: 0, coach: 1, guide: 3, companion: 0 } },
            { text: '"That\'s okay. Take your time. I\'m not going anywhere."', weights: { nurturer: 1, coach: 0, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 'p5',
          text: 'How do you praise your child after they succeed at something hard?',
          options: [
            { text: 'Celebrate loudly and make a big warm deal of it', weights: { nurturer: 3, coach: 1, guide: 0, companion: 0 } },
            { text: 'Highlight the specific effort and strategy that worked', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'Connect the success to a lesson they can use next time', weights: { nurturer: 0, coach: 1, guide: 3, companion: 0 } },
            { text: 'Share in their joy quietly and let them savor the moment', weights: { nurturer: 1, coach: 0, guide: 0, companion: 3 } },
          ],
        },
      ],
    },
    {
      id: 'discipline',
      title: 'Discipline Approach',
      emoji: '⚖️',
      questions: [
        {
          id: 'd1',
          text: 'Your child throws a tantrum in public. Your approach is...',
          options: [
            { text: 'Kneel down, hold them, and wait for the storm to pass', weights: { nurturer: 3, coach: 0, guide: 1, companion: 1 } },
            { text: 'Calmly state what behavior is expected and why', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'Explain the social situation and what others might think', weights: { nurturer: 0, coach: 0, guide: 3, companion: 0 } },
            { text: 'Find a quiet spot and let them decompress at their own pace', weights: { nurturer: 1, coach: 1, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 'd2',
          text: 'You believe rules for children should be...',
          options: [
            { text: 'Warm and flexible—love is more effective than rules', weights: { nurturer: 3, coach: 0, guide: 0, companion: 1 } },
            { text: 'Clear, consistent, and linked to specific outcomes', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'Grounded in principles the child understands and agrees with', weights: { nurturer: 0, coach: 0, guide: 3, companion: 1 } },
            { text: 'Minimal—children learn better through experience than rules', weights: { nurturer: 1, coach: 1, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 'd3',
          text: 'When your child deliberately breaks a rule, you...',
          options: [
            { text: 'Wonder what need wasn\'t being met and address that', weights: { nurturer: 3, coach: 0, guide: 1, companion: 1 } },
            { text: 'Apply a consistent, pre-agreed consequence immediately', weights: { nurturer: 0, coach: 3, guide: 0, companion: 0 } },
            { text: 'Have a conversation about why the rule exists', weights: { nurturer: 0, coach: 1, guide: 3, companion: 0 } },
            { text: 'Give space first, then revisit it calmly later', weights: { nurturer: 1, coach: 0, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 'd4',
          text: 'You think the most important thing for a child to learn from mistakes is...',
          options: [
            { text: 'That they are still loved, no matter what', weights: { nurturer: 3, coach: 0, guide: 0, companion: 1 } },
            { text: 'How to do better next time and hold themselves accountable', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'Why it happened and what deeper principle was at stake', weights: { nurturer: 0, coach: 0, guide: 3, companion: 0 } },
            { text: 'How to self-forgive and move forward with confidence', weights: { nurturer: 1, coach: 1, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 'd5',
          text: 'How do you handle disagreements between siblings?',
          options: [
            { text: 'Step in quickly to make sure no one feels hurt or unloved', weights: { nurturer: 3, coach: 0, guide: 0, companion: 1 } },
            { text: 'Give them a structured process to resolve it themselves', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'Explain each side\'s perspective to both of them', weights: { nurturer: 0, coach: 0, guide: 3, companion: 0 } },
            { text: 'Let them work it out—step in only if it escalates', weights: { nurturer: 1, coach: 1, guide: 0, companion: 3 } },
          ],
        },
      ],
    },
    {
      id: 'emotional',
      title: 'Emotional Support',
      emoji: '❤️',
      questions: [
        {
          id: 'e1',
          text: 'Your child tells you they feel lonely at school. You...',
          options: [
            { text: 'Feel it deeply with them and focus entirely on comfort', weights: { nurturer: 3, coach: 0, guide: 0, companion: 2 } },
            { text: 'Help them brainstorm three concrete steps to make friends', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'Explain what friendships take and how to build them', weights: { nurturer: 0, coach: 1, guide: 3, companion: 0 } },
            { text: 'Tell them you felt lonely too sometimes, and listen', weights: { nurturer: 1, coach: 0, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 'e2',
          text: 'When your child cries, you instinctively...',
          options: [
            { text: 'Hold them close and say "it\'s okay" over and over', weights: { nurturer: 3, coach: 0, guide: 0, companion: 1 } },
            { text: 'Ask what happened and move toward solving it', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'Help them name exactly what they\'re feeling and why', weights: { nurturer: 0, coach: 0, guide: 3, companion: 1 } },
            { text: 'Sit quietly beside them without saying anything at first', weights: { nurturer: 1, coach: 0, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 'e3',
          text: 'You believe a child\'s emotional wellbeing is most supported by...',
          options: [
            { text: 'An abundance of unconditional love and physical closeness', weights: { nurturer: 3, coach: 0, guide: 0, companion: 1 } },
            { text: 'Building resilience and emotional coping skills early', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'Helping them understand themselves and their inner world', weights: { nurturer: 0, coach: 0, guide: 3, companion: 1 } },
            { text: 'A parent who accepts them exactly as they are', weights: { nurturer: 1, coach: 0, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 'e4',
          text: 'Your child is anxious about a big event coming up. You...',
          options: [
            { text: 'Reassure them constantly and offer maximum comfort', weights: { nurturer: 3, coach: 0, guide: 0, companion: 1 } },
            { text: 'Help them prepare as thoroughly as possible', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'Explain that anxiety is normal and what it means about them', weights: { nurturer: 0, coach: 0, guide: 3, companion: 0 } },
            { text: 'Share that you get nervous too, and just be present with them', weights: { nurturer: 1, coach: 0, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 'e5',
          text: 'When your child is angry with you, your first response is...',
          options: [
            { text: 'To not take it personally and to offer a hug anyway', weights: { nurturer: 3, coach: 0, guide: 0, companion: 1 } },
            { text: 'To set a boundary calmly and redirect the conversation', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'To help them understand why they\'re angry and express it well', weights: { nurturer: 0, coach: 0, guide: 3, companion: 1 } },
            { text: 'To give them space and come back when everyone is calm', weights: { nurturer: 0, coach: 1, guide: 0, companion: 3 } },
          ],
        },
      ],
    },
    {
      id: 'timeplay',
      title: 'Time & Play',
      emoji: '🎮',
      questions: [
        {
          id: 't1',
          text: 'On a free weekend morning with your child, you most enjoy...',
          options: [
            { text: 'Cooking breakfast together slowly and talking about everything', weights: { nurturer: 3, coach: 0, guide: 0, companion: 2 } },
            { text: 'Having a structured activity or game you\'ve planned', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'Reading together and discussing what you learn', weights: { nurturer: 0, coach: 0, guide: 3, companion: 1 } },
            { text: 'Following their lead—whatever they want to do is perfect', weights: { nurturer: 1, coach: 0, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 't2',
          text: 'How do you feel about structured extracurricular activities for kids?',
          options: [
            { text: 'Great if the child loves it—forced activities break the spirit', weights: { nurturer: 3, coach: 0, guide: 0, companion: 1 } },
            { text: 'Essential—structured activities build real skills and discipline', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'Valuable if chosen thoughtfully to match the child\'s nature', weights: { nurturer: 0, coach: 1, guide: 3, companion: 0 } },
            { text: 'Less important than unstructured free play and downtime', weights: { nurturer: 1, coach: 0, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 't3',
          text: 'When you play with your child, you tend to...',
          options: [
            { text: 'Get fully into their world—I become part of the game', weights: { nurturer: 2, coach: 0, guide: 0, companion: 3 } },
            { text: 'Guide the play toward something educational or skill-building', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'Ask questions that help them think more deeply about the game', weights: { nurturer: 0, coach: 0, guide: 3, companion: 1 } },
            { text: 'Let them lead entirely and just be a joyful participant', weights: { nurturer: 1, coach: 0, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 't4',
          text: 'Your child wants to quit an activity they signed up for. You...',
          options: [
            { text: 'Support them immediately—their happiness matters most', weights: { nurturer: 3, coach: 0, guide: 0, companion: 1 } },
            { text: 'Hold them to finishing the season or term they committed to', weights: { nurturer: 0, coach: 3, guide: 0, companion: 0 } },
            { text: 'Discuss why they want to quit and what it might teach them', weights: { nurturer: 0, coach: 1, guide: 3, companion: 0 } },
            { text: 'Ask how they feel and trust them to make the final call', weights: { nurturer: 1, coach: 0, guide: 0, companion: 3 } },
          ],
        },
        {
          id: 't5',
          text: 'The best parenting moments, in your view, happen when...',
          options: [
            { text: 'Your child feels completely safe and loved', weights: { nurturer: 3, coach: 0, guide: 0, companion: 1 } },
            { text: 'You watch your child overcome something they thought was impossible', weights: { nurturer: 0, coach: 3, guide: 1, companion: 0 } },
            { text: 'Your child says something that shows they\'ve really understood something deep', weights: { nurturer: 0, coach: 0, guide: 3, companion: 1 } },
            { text: 'You\'re both laughing and fully in the present moment together', weights: { nurturer: 1, coach: 0, guide: 0, companion: 3 } },
          ],
        },
      ],
    },
  ],
}
