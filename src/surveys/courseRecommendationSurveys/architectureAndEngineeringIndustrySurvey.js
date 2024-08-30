const ID = "architecture-and-engineering-industry-survey";

const TITLE =
  "1-Minute Survey for Architecture and Engineering Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Design Thinking could revolutionize our approach to client projects and foster more innovative architectural solutions?",
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
      "How strongly do you believe that incorporating Sustainable Design and Green Building Practices in our projects will help us meet the growing demand for eco-friendly structures?",
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
      "How beneficial do you think Innovative Collaboration training would be for enhancing teamwork across multidisciplinary engineering teams?",
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
      "To what extent would training in Sustainable Design ensure our compliance with the latest environmental regulations?",
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
      "How likely is it that using Design Thinking will help us address current challenges in urban planning and infrastructure development?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Design Thinking", "Innovative Collaboration"],
  personalizedCourse: {
    name: "Sustainable Design and Green Building Practices",
    description:
      "Learn how to incorporate sustainable design principles into architecture and engineering projects to meet the growing demand for eco-friendly structures.",
  },
};

export const ARCHITECTURE_AND_ENGINEERING_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
