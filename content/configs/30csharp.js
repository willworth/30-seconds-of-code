export default {
  name: '30 seconds of C#',
  dirName: '30csharp',
  repoUrl: 'https://github.com/30-seconds/30-seconds-of-csharp',
  snippetPath: 'snippets',
  requirables: [
    'snippet_data/snippets.json',
  ],
  slug: 'c-sharp',
  featured: 6,
  theme: {
    backColor: '#672179',
    foreColor: '#ffffff',
    iconName: 'csharp',
  },
  biasPenaltyMultiplier: 1.02,
  tagScores: {
    'array': 5,
    'list': 4,
    'string': 3,
    'date': 2,
    'type': 1,
    'math': 1,
    'utility': 1,
  },
  keywordScores: {
    'list': 5,
    'linq': 4,
    'dictionary': 4,
    'array': 3,
    'sort': 3,
    'filter': 2,
    'operator': 2,
    'date': 2,
    'distinct': 2,
    'int': 1,
    'loop': 1,
    'index': 1,
    'byte': 1,
    'predicate': 1,
  },
};
