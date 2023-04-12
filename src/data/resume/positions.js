const positions = [
  {
    company: 'School of Information, University of Michigan Ann Arbor',
    position: 'Research Assistant',
    professor: 'Jinseok Kim',
    link: 'https://teedl.isr.umich.edu/members',
    daterange: 'May 2022 - April 2023',
    points: [
      'Developed a program to read and parse all JSON files, including those in subfolders, using the author&apos;s name and paper, and assigning unique IDs to each article and author.',
      'Implemented Union find to merge authors with names that had a similarity of greater than 85% as determined by difflib.SequenceMatcher.',
      'Enhanced a Random Forest model by adding an "ethnicity" feature through the creation of a transformer object and modification of the distance estimator, resulting in an improvement in model precision from 77.5% to 85%.',
    ],
  },
  {
    company: 'The Pacific Securities',
    position: 'Automobile Research Team Intern',
    location: 'Shanghai, China',
    link: 'https://www.linkedin.com/company/the-pacific-securities-co-ltd-/',
    daterange: 'July 2021 - August 2021',
    points: [
      'Conducted market research and analysis of the Geely Auto, including market trends, competitor analysis, and consumer behavior.',
      'Created a financial news dataset by writing a web crawler to gather data from financial news articles using Requests, Beautifulsoup, and Selenium. Utilized Pandas to clean and prepare the data for analysis.',
    ],
  },
];

export default positions;
