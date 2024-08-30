const ID = "specialty-retail-industry-survey";

const TITLE = "1-Minute Survey for Specialty Retail Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Customer Experience training will enhance customer satisfaction and loyalty in our specialty retail business?",
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
      "How strongly do you believe that Digital Marketing training will improve our ability to reach and engage niche markets?",
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
      "How beneficial do you think Niche Market Strategies training would be in helping us develop targeted marketing campaigns?",
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
      "To what extent would Sales and AI training improve our ability to personalize shopping experiences and increase sales?",
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
      "How likely is it that Niche Market Strategies training will give us a competitive edge in the specialty retail industry?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Customer Experience", "Digital Marketing", "Sales and AI"],
  additionalCourse: {
    name: "Transformative Leadership",
    school: "Ashland University",
    description:
      "Teaches implementing effective organizational change, improving communication, and fostering a positive corporate culture.",
  },
  personalizedCourse: {
    name: "Niche Market Strategies",
    description:
      "Focuses on identifying, targeting, and effectively marketing to niche audiences, offering strategies to differentiate products and services, build brand loyalty, and capitalize on specialized market opportunities.",
  },
};

export const SPECIALTY_RETAIL_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
