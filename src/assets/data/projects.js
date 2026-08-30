import autImage from '../images/aut.jpg';
import hailoImage from '../images/hailo.png';
import jyunbiImage from '../images/jyunbi.png';

const jyunbi = {
    wip: true,
    title: 'Jyunbi: AI Powered Study Planner',
    description: 'Jyunbi is an AI powered study planner that allows learners to generate lessons and quizzes using a persisted state of their current progress, areas for improvement, and topics already mastered. This project has an enthesis on product design and market research.',
    preview: jyunbiImage,
    technologies: 'AI-Assisted Programming ‧ NestJS ‧ ReactJS ‧ OpenAI API',
    url: 'https://jlpt-study-app.logan-loganwood.workers.dev/',
    github_url: null
}

const govHack2024 = {
    wip: false,
    title: 'HAiLO: Road Safety Advice',
    description: 'A category winner submission in GovHack 2024, my team and I created an AI powered web application capable of providing reports on the causes of car crashes in a specified area. These reports can be generated from various data sources, and provide suggestions to minimize the risk of further events.',
    preview: hailoImage,
    technologies: 'Gemini API ‧ Data Science Methodologies ‧ Prompt Engineering ‧ Python ‧ Flask',
    url: 'https://hailo-govhack24.onrender.com/',
    github_url: 'https://github.com/logan-wood/govhack24-best-kase-scenario-HOSTED',
    govhackWinner: true
}

const rndProject = {
    wip: false,
    title: 'AUT Final Year Project',
    description: 'Working with a team of other final year students, we\'ve increased efficiency and productivity for our client in the Agricultural industry by leveraging a vision intelligence model. A camera has been set up on the processing line, which provides images to our vision intelligence model, to classify the moisture level of the produce. This information is used to assist in calibrating machine settings on the processing line.',
    preview: autImage,
    technologies: 'Python ‧ Flask ‧ Tensorflow ‧ Vision Intelligence ‧ Classification',
    url: null,
    github_url: null
}

export { jyunbi, rndProject, govHack2024 }