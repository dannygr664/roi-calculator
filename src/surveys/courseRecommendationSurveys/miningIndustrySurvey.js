const ID = "mining-industry-survey";

const TITLE = "1-Minute Survey for Mining Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Sustainable Mining Practices training is crucial for minimizing environmental impact and maintaining compliance?",
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
      "How strongly do you believe that training in Sustainable Mining will enhance our reputation and public trust?",
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
      "How beneficial do you think Sustainable Mining Practices training would be in reducing operational risks and improving safety standards?",
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
      "To what extent would adopting Sustainable Mining practices improve our ability to meet global environmental standards?",
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
      "How likely is it that Sustainable Mining Practices training will improve our operational efficiency and resource management?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: [],
  personalizedCourse: {
    name: "Sustainable Mining Practices",
    description:
      "This course covers sustainable mining practices, strategies for reducing environmental impact, and methods to enhance safety and compliance.",
  },
};

export const MINING_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
