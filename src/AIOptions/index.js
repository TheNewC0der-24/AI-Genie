export const options = [
  {
    name: 'Notes to summary',
    id: 'notesToSummary',
    description: 'Turn meeting notes into a summary.',
    option: {
      model: 'text-davinci-003',
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }
  },
  {
    name: 'Grammar correction',
    id: 'grammarCorrection',
    description: 'Corrects sentences into standard English.',
    option: {
      model: 'text-davinci-003',
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }
  },
  {
    name: 'Summarize for a 2nd grader',
    id: 'summarizeForA2ndGrader',
    description: 'Translates difficult text into simpler concepts.',
    option: {
      model: 'text-davinci-003',
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }
  },
  {
    name: 'English to other languages',
    id: 'englishToOtherLanguages',
    description: 'Translates English text into French, Spanish and Japanese.',
    option: {
      model: 'text-davinci-003',
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }
  },
  {
    name: 'Movie to Emoji',
    id: 'movieToEmoji',
    description: 'Convert movie titles into emoji.',
    option: {
      model: 'text-davinci-003',
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['\n']
    }
  },
  {
    name: 'Explain code',
    id: 'explainCode',
    description: 'Explain a complicated piece of code.',
    option: {
      model: 'text-davinci-003',
      temperature: 0,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['"""']
    }
  },
  {
    name: 'JavaScript to Python',
    id: 'javaScriptToPython',
    description: 'Convert simple JavaScript expressions into Python.',
    option: {
      model: 'text-davinci-003',
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }
  },
  {
    name: 'Classification',
    id: 'classification',
    description: 'Classify items into categories via example.',
    option: {
      model: 'text-davinci-003',
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }
  },
  {
    name: 'Product name generator',
    id: 'productNameGenerator',
    description:
      'Create product names from examples words. Influenced by a community prompt.',
    option: {
      model: 'text-davinci-003',
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }
  }
];
