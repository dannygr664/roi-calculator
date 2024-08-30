const ID = "environmental-services-industry-survey";

const TITLE =
  "1-Minute Survey for Environmental Services Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Innovative Collaboration training will improve our environmental project outcomes and client satisfaction?",
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
      "How strongly do you believe that Design Thinking will lead to more sustainable and impactful environmental solutions?",
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
      "How beneficial do you think Environmental Policy and Management training would be in enhancing our ability to navigate regulatory challenges?",
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
      "To what extent would adopting Innovative Collaboration practices boost our operational efficiency and project impact?",
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
      "How likely is it that Design Thinking training will enhance our ability to create innovative solutions for environmental challenges?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Innovative Collaboration", "Design Thinking"],
  personalizedCourse: {
    name: "Environmental Policy and Management",
    description:
      "This course will cover innovative collaboration techniques, design thinking for environmental solutions, and strategies for navigating environmental policy and regulations.",
  },
};

export const ENVIRONMENTAL_SERVICES_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
