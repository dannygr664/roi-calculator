const ID = "artificial-intelligence-and-machine-learning-industry-survey";

const TITLE =
  "1-Minute Survey for AI and Machine Learning Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that integrating Strategic AI will optimize decision-making processes across various departments?",
    answers: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "How strongly do you believe that training in Advanced Machine Learning Algorithms will enable our data scientists to push the boundaries of AI-driven projects?",
    answers: [
      "Not at All",
      "Slightly",
      "Moderately",
      "Very Much",
      "Completely",
    ],
  },
  {
    question:
      "How beneficial do you think Digital Accelerator courses will be in accelerating the deployment of AI tools and technologies within our organization?",
    answers: [
      "Not Beneficial",
      "Slightly Beneficial",
      "Moderately Beneficial",
      "Very Beneficial",
      "Extremely Beneficial",
    ],
  },
  {
    question:
      "To what extent would developing a deep understanding of Machine Learning Algorithms help us stay ahead in AI innovation?",
    answers: [
      "No Extent",
      "Slight Extent",
      "Moderate Extent",
      "Significant Extent",
      "Full Extent",
    ],
  },
  {
    question:
      "How likely is it that the integration of Strategic AI will lead to significant improvements in our operational performance?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Strategic AI", "Digital Accelerator"],
  personalizedCourse: {
    name: "Advanced Machine Learning Algorithms",
    description:
      "This course will cover advanced machine learning algorithms, strategic AI integration, and techniques to optimize AI-driven decision-making processes.",
  },
};

export const ARTIFICIAL_INTELLIGENCE_AND_MACHINE_LEARNING_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
