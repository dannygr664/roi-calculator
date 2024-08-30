const ID = "forestry-industry-survey";

const TITLE = "1-Minute Survey for Forestry Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Sustainable Forestry and Conservation training is critical for ensuring the long-term viability of our operations?",
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
      "How strongly do you believe that training in Sustainable Forestry practices will enhance our environmental stewardship and public image?",
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
      "How beneficial do you think Sustainable Forestry and Conservation training would be in improving our compliance with environmental regulations?",
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
      "To what extent would adopting Sustainable Forestry practices enhance our ability to meet global sustainability standards?",
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
      "How likely is it that Sustainable Forestry and Conservation training will improve our operational efficiency and resource management?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: [],
  personalizedCourse: {
    name: "Sustainable Forestry and Conservation",
    description:
      "This course covers sustainable forestry practices, conservation techniques, and strategies to meet global sustainability standards.",
  },
};

export const FORESTRY_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
