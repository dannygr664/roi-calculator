const ID = "space-exploration-and-commercialization-industry-survey";

const TITLE =
  "1-Minute Survey for Space Exploration and Commercialization Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Digital Accelerator training will enhance our ability to innovate in space exploration and commercialization?",
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
      "How strongly do you believe that Strategic AI will be crucial for optimizing space missions and operations?",
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
      "How beneficial do you think Space Technology and Exploration training would be in advancing our technical capabilities and market position?",
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
      "To what extent would Generative AI improve our ability to simulate and plan complex space missions?",
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
      "How likely is it that Space Technology and Exploration training will position us as a leader in the space industry?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Digital Accelerator", "Strategic AI", "Generative AI"],
  personalizedCourse: {
    name: "Space Technology and Exploration",
    description:
      "This course covers digital acceleration, strategic AI, generative AI, and advanced space technology and exploration techniques.",
  },
};

export const SPACE_EXPLORATION_AND_COMMERCIALIZATION_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
