const ID = "hospitality-industry-survey";

const TITLE = "1-Minute Survey for Hospitality Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Customer Experience training will improve guest satisfaction and loyalty in our hospitality business?",
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
      "How strongly do you believe that Digital Marketing training will enhance our ability to attract new customers and grow our market share?",
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
      "How beneficial do you think Hospitality Management and Operations training would be in optimizing our operational efficiency and profitability?",
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
      "To what extent would Sales and AI training improve our ability to personalize guest experiences and increase revenue?",
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
      "How likely is it that Customer Experience training will help us stay competitive in the rapidly evolving hospitality industry?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Customer Experience", "Digital Marketing", "Sales and AI"],
  personalizedCourse: {
    name: "Hospitality Management and Operations",
    description:
      "This course covers customer experience, digital marketing, and strategies to optimize operations and profitability in the hospitality industry.",
  },
};

export const HOSPITALITY_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
