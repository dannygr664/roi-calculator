const ID = "general-retail-industry-survey";

const TITLE = "1-Minute Survey for General Retail Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Customer Experience training will significantly enhance customer satisfaction and loyalty in our retail operations?",
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
      "How strongly do you believe that Digital Marketing training will improve our online and in-store sales performance?",
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
      "How beneficial do you think Omni-Channel Retail Strategies training would be in creating a seamless customer experience across all channels?",
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
      "To what extent would Customer Experience training improve our ability to meet evolving consumer expectations in the retail market?",
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
      "How likely is it that integrating Omni-Channel Retail Strategies will enhance our competitive advantage in the retail industry?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Customer Experience", "Digital Marketing"],
  personalizedCourse: {
    name: "Omni-Channel Retail Strategies",
    description:
      "This course covers customer experience, digital marketing, and strategies to create a seamless retail experience across multiple channels.",
  },
};

export const GENERAL_RETAIL_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
