const ID = "non-profit-organizations-industry-survey";

const TITLE = "1-Minute Survey for Non-Profit Organizations Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Transformative Leadership training is essential for guiding our non-profit through challenging times?",
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
      "How strongly do you believe that Emergent Leadership training will improve our ability to adapt to change and seize new opportunities?",
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
      "How beneficial do you think Non-Profit Management and Fundraising training would be in enhancing our ability to secure and manage funding?",
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
      "To what extent would Transformative Leadership practices improve our organization's resilience and effectiveness in fulfilling our mission?",
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
      "How likely is it that Emergent Leadership training will position us as a leading non-profit in our sector?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Transformative Leadership", "Emergent Leadership"],
  personalizedCourse: {
    name: "Non-Profit Management and Fundraising",
    description:
      "This course covers transformative leadership, emergent leadership practices, and strategies for effective management and fundraising in non-profit organizations.",
  },
};

export const NON_PROFIT_ORGANIZATIONS_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
