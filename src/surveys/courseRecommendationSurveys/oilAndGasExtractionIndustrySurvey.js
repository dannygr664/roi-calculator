const ID = "oil-and-gas-extraction-industry-survey";

const TITLE =
  "1-Minute Survey for Oil and Gas Extraction Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that IT and Cybersecurity Leadership training is critical for protecting our operations from cyber threats?",
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
      "How strongly do you believe that Disruptive Leadership training will prepare our leaders to navigate the challenges of the energy transition?",
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
      "How beneficial do you think Energy Transition and Renewable Integration training would be in helping us adapt to the shift towards renewable energy?",
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
      "To what extent would IT and Cybersecurity Leadership training improve our ability to ensure safe and efficient operations?",
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
      "How likely is it that Disruptive Leadership training will give us a competitive edge in the evolving energy market?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["IT and Cybersecurity Leadership", "Disruptive Leadership"],
  personalizedCourse: {
    name: "Energy Transition and Renewable Integration",
    description:
      "This course covers IT and cybersecurity leadership, disruptive leadership, and strategies for navigating the energy transition and integrating renewable energy.",
  },
};

export const OIL_AND_GAS_EXTRACTION_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
