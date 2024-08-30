const ID = "ecommerce-industry-survey";

const TITLE = "1-Minute Survey for E-commerce Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Digital Marketing training will significantly boost our online sales and customer acquisition?",
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
      "How strongly do you believe that Customer Experience training will improve customer retention and brand loyalty in our e-commerce business?",
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
      "How beneficial do you think E-commerce Optimization and Analytics training would be for enhancing our website performance and conversion rates?",
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
      "To what extent would Sales and AI training improve our targeting and personalization strategies in e-commerce?",
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
      "How likely is it that Digital Marketing training will help us outperform competitors in the e-commerce space?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Digital Marketing", "Customer Experience", "Sales and AI"],
  personalizedCourse: {
    name: "E-commerce Optimization and Analytics",
    description:
      "This course will cover strategies to optimize e-commerce websites, enhance customer experience, and leverage analytics to improve sales and conversion rates.",
  },
};

export const E_COMMERCE_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
