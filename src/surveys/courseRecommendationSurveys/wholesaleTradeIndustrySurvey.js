const ID = "wholesale-trade-industry-survey";

const TITLE = "1-Minute Survey for Wholesale Trade Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Customer Experience training will enhance our relationships with retailers and increase sales in the wholesale market?",
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
      "How strongly do you believe that Digital Marketing training will improve our ability to attract new clients and grow our wholesale business?",
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
      "How beneficial do you think Wholesale Distribution Management training would be in optimizing our supply chain and inventory management?",
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
      "To what extent would Customer Experience training improve our ability to meet the evolving needs of our retail partners?",
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
      "How likely is it that Wholesale Distribution Management training will enhance our market position and profitability in the wholesale industry?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Customer Experience", "Digital Marketing"],
  personalizedCourse: {
    name: "Wholesale Distribution Management",
    description:
      "Explores the principles and best practices of managing wholesale distribution, focusing on inventory control, logistics, customer relationships, and strategies to optimize the supply chain for increased profitability and efficiency.",
  },
};

export const WHOLESALE_TRADE_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
