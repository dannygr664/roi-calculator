const TITLE = "1-Minute Survey for HR Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question: "What are the top pain points in your industry sector?",
    answers: [
      "Managing employee well-being and burnout",
      "Navigating hybrid work and maintaining company culture",
      "Adopting and integrating HR technology and AI",
      "Managing talent acquisition and retention",
      "Ensuring diversity, equity, and inclusion (DEI)",
    ],
  },
  {
    question:
      "What are the professional development training needs for your employees?",
    answers: [
      "Mental health and well-being support strategies",
      "Techniques for fostering culture and engagement in a hybrid environment",
      "Training on implementing and managing HR technology and AI",
      "Advanced talent acquisition and retention strategies",
      "DEI best practices and implementation",
    ],
  },
  {
    question:
      "Which company-specific initiatives or objectives require training to meet certain KPIs and objectives?",
    answers: [
      "Enhancing employee engagement and reducing turnover",
      "Successfully integrating hybrid work models and maintaining productivity",
      "Leveraging HR technology and AI to improve efficiency",
      "Developing a comprehensive DEI program",
      "Meeting organizational growth targets through effective talent management",
    ],
  },
];

const RESULTS = {
  zschoolCourse: {
    name: "Strategic HR",
    description:
      "Covers the fundamentals of HR, employee experience management, and strategic HR planning.",
  },
  additionalCourse: {
    name: "Women in Leadership",
    school: "Harrisburg University",
    description:
      "Focuses on effective team leadership, strategic growth, and inspiring positive change within organizations.",
  },
  personalizedCourse: {
    name: "Advanced HR Strategies: Technology, Culture, and Well-being",
    description:
      "This course will cover strategies for managing employee well-being, integrating HR technology, and maintaining company culture in a hybrid work environment. It will also address advanced techniques in talent acquisition, retention, and DEI initiatives.",
  },
};

export const HUMAN_RESOURCES_SURVEY = {
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
