const ID = "construction-industry-survey";

const TITLE = "1-Minute Survey for Construction Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Innovative Collaboration training could enhance teamwork and efficiency on our construction projects?",
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
      "How strongly do you believe that Disruptive Leadership training will prepare our leaders to drive innovation in the construction industry?",
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
      "How beneficial do you think Smart Construction and Project Management training would be in improving project outcomes and reducing costs?",
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
      "To what extent would the integration of Innovative Collaboration practices improve the safety and quality of our construction projects?",
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
      "How likely is it that Disruptive Leadership training will help us navigate industry challenges and seize new opportunities in construction?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Innovative Collaboration", "Disruptive Leadership"],
  personalizedCourse: {
    name: "Smart Construction and Project Management",
    description:
      "This course covers innovative collaboration, smart construction techniques, and project management strategies to improve outcomes and reduce costs in the construction industry.",
  },
};

export const CONSTRUCTION_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
