const ID = "general-business-industry-survey";

const TITLE = "1-Minute Survey for General Business Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Transformative Leadership training will significantly impact our organizational culture and drive performance?",
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
      "How strongly do you believe that Sales and AI training will improve our sales processes and overall business outcomes?",
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
      "How beneficial do you think Business Analytics and Decision Making training would be in enhancing our strategic planning capabilities?",
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
      "To what extent would Emergent Leadership training improve our ability to adapt to market changes and capitalize on new opportunities?",
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
      "How likely is it that Transformative Leadership training will position us as a leader in our industry?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: [
    "Transformative Leadership",
    "Emergent Leadership",
    "Sales and AI",
  ],
  personalizedCourse: {
    name: "Business Analytics and Decision Making",
    description:
      "This course covers transformative leadership, business analytics, and strategies to enhance decision-making and drive business performance.",
  },
};

export const GENERAL_BUSINESS_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
