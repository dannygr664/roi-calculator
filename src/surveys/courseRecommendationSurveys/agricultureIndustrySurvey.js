const ID = "agriculture-industry-survey";

const TITLE = "1-Minute Survey for Agriculture Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Customer Experience training could significantly improve our relationships with distributors and retailers?",
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
      "How strongly do you believe that Smart Agriculture and IoT Integration would enhance our farm management practices to boost productivity and sustainability?",
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
      "To what extent would upskilling in IoT technologies for precision agriculture improve our operational efficiency?",
    answers: [
      "No Improvement",
      "Slight Improvement",
      "Moderate Improvement",
      "Significant Improvement",
      "Maximum Improvement",
    ],
  },
  {
    question:
      "How beneficial do you think Customer Experience training would be in helping us meet the increasing consumer demand for sustainable agricultural products?",
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
      "How likely is it that integrating Smart Agriculture and IoT Integration into our operations will drive innovation and strengthen our competitive position?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Customer Experience"],
  personalizedCourse: {
    name: "Smart Agriculture and IoT Integration",
    description:
      "Learn how to integrate IoT technologies into agricultural practices for enhanced productivity and sustainability.",
  },
};

export const AGRICULTURE_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
