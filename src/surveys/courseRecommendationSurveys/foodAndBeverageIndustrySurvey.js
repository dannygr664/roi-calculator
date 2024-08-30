const ID = "food-and-beverage-industry-survey";

const TITLE = "1-Minute Survey for Food and Beverage Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Customer Experience training is vital for improving customer satisfaction and brand loyalty in the food and beverage industry?",
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
      "How strongly do you believe that Digital Marketing training will enhance our ability to attract and retain customers in a competitive market?",
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
      "How beneficial do you think Food Safety and Quality Management training would be in ensuring compliance and product excellence?",
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
      "To what extent would Customer Experience practices improve our ability to meet evolving consumer expectations?",
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
      "How likely is it that Digital Marketing training will increase our market share and sales growth in the food and beverage sector?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Customer Experience", "Digital Marketing"],
  additionalCourse: {
    name: "Generative AI for Value Creation",
    school: "Ashland University",
    description:
      "Focuses on leveraging generative AI for organizational success, enhancing efficiency, and driving innovation.",
  },
  personalizedCourse: {
    name: "Food Safety and Quality Management",
    description:
      "This course will cover best practices in food safety, quality management, and strategies to enhance customer experience and brand loyalty.",
  },
};

export const FOOD_AND_BEVERAGE_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
