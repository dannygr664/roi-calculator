const ID = "cryptocurrency-and-blockchain-industry-survey";

const TITLE =
  "1-Minute Survey for Cryptocurrency and Blockchain Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Digital Accelerator training will help us stay at the forefront of cryptocurrency and blockchain technologies?",
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
      "How strongly do you believe that Strategic AI will be crucial in optimizing blockchain applications and security?",
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
      "How beneficial do you think Blockchain Applications and Security training would be in enhancing our team's expertise and industry leadership?",
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
      "To what extent would the adoption of Strategic AI improve our competitive advantage in the blockchain space?",
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
      "How likely is it that Digital Accelerator training will accelerate our innovation in the cryptocurrency and blockchain markets?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Digital Accelerator", "Strategic AI"],
  personalizedCourse: {
    name: "Blockchain Applications and Security",
    description:
      "This course will cover blockchain applications, security best practices, and leveraging AI to optimize cryptocurrency and blockchain technologies.",
  },
};

export const CRYPTOCURRENCY_AND_BLOCKCHAIN_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
