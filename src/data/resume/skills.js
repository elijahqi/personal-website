const skills = [
  {
    title: 'Java',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Go',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'JavaScript/TypeScript',
    competency: 3,
    category: ['Languages', 'Full Stack'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Languages', 'Growth & Data'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Full Stack'],
  },
  {
    title: 'Node.js',
    competency: 3,
    category: ['Full Stack'],
  },
  {
    title: 'Spring Boot',
    competency: 4,
    category: ['Full Stack'],
  },
  {
    title: 'REST APIs',
    competency: 4,
    category: ['Full Stack'],
  },
  {
    title: 'SSE',
    competency: 3,
    category: ['Full Stack'],
  },
  {
    title: 'HTML/CSS',
    competency: 3,
    category: ['Full Stack'],
  },
  {
    title: 'Spark',
    competency: 4,
    category: ['Growth & Data'],
  },
  {
    title: 'Hive',
    competency: 3,
    category: ['Growth & Data'],
  },
  {
    title: 'ClickHouse',
    competency: 3,
    category: ['Growth & Data'],
  },
  {
    title: 'Elasticsearch',
    competency: 4,
    category: ['Growth & Data'],
  },
  {
    title: 'Funnel Optimization',
    competency: 3,
    category: ['Growth & Data'],
  },
  {
    title: 'ETL Pipelines',
    competency: 4,
    category: ['Growth & Data'],
  },
  {
    title: 'LLM Integration',
    competency: 4,
    category: ['AI/ML'],
  },
  {
    title: 'ReAct Agents',
    competency: 4,
    category: ['AI/ML'],
  },
  {
    title: 'RAG Pipelines',
    competency: 3,
    category: ['AI/ML'],
  },
  {
    title: 'Eino Framework',
    competency: 3,
    category: ['AI/ML'],
  },
  {
    title: 'Prompt Engineering',
    competency: 4,
    category: ['AI/ML'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Infrastructure'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Infrastructure'],
  },
  {
    title: 'RocketMQ',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Kafka',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Thrift RPC',
    competency: 3,
    category: ['Infrastructure'],
  },
  {
    title: 'CI/CD',
    competency: 3,
    category: ['Infrastructure'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
