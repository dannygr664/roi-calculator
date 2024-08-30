const ID = "fishing-industry-survey";

const TITLE = "1-Minute Survey for Fishing Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that training in sustainable fishing practices is important for the long-term viability of our operations?",
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
      "How strongly do you believe that integrating new technologies will enhance our fishing efficiency and reduce environmental impact?",
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
      "How beneficial do you think training in sustainable fishing practices would be in ensuring compliance with regulations and improving our market position?",
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
      "To what extent would adopting sustainable fishing practices improve our brand reputation and customer trust?",
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
      "How likely is it that sustainable fishing practices will help us secure partnerships with environmentally conscious buyers?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: [],
  personalizedCourse: {
    name: "Sustainable Fishing Practices and Technologies",
    description:
      "This course will cover sustainable fishing practices, the integration of new technologies, and strategies to improve compliance and market positioning.",
  },
};

export const FISHING_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
