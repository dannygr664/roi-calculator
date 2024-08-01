const ID = "media-and-entertainment-industry-survey";

const TITLE =
  "1-Minute Survey for Media and Entertainment Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question: "What are the top pain points in your industry sector?",
    answers: [
      "Rapid technological advancements and digital transformation",
      "Intellectual property and piracy issues",
      "Changing consumer behaviors and content consumption",
      "Monetization and revenue generation",
      "Talent acquisition and retention",
    ],
  },
  {
    question:
      "What are the professional development training needs for your employees?",
    answers: [
      "Digital content creation and distribution",
      "Intellectual property management and legal compliance",
      "Data analytics and consumer insights",
      "Revenue generation strategies (e.g., streaming, merchandise)",
      "Talent management and development",
    ],
  },
  {
    question:
      "Which company-specific initiatives or objectives require training to meet certain KPIs and objectives?",
    answers: [
      "Adopting new technologies for content creation and distribution",
      "Protecting intellectual property and combating piracy",
      "Understanding and adapting to changing consumer preferences",
      "Developing new revenue streams and business models",
      "Enhancing talent acquisition and retention",
    ],
  },
];

const RESULTS = {
  zschoolCourses: [
    "Digital Marketing",
    "Disruptive Leadership",
    "Strategic AI",
  ],
  additionalCourse: {
    name: "Strategic AI",
    school: "University of San Francisco",
    description:
      "Focuses on navigating AI's transformative potential, developing AI strategies, and implementing AI-driven innovations.",
  },
  personalizedCourse: {
    name: "Digital Transformation in Entertainment",
    description:
      "This course will focus on digital content creation, IP management, consumer analytics, monetization strategies, and effective talent management in the entertainment industry.",
  },
};

export const MEDIA_AND_ENTERTAINMENT_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
