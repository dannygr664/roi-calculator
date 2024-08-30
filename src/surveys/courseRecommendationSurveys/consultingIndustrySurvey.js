const ID = "consulting-industry-survey";

const TITLE = "1-Minute Survey for Consulting Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Strategic AI training will enhance our ability to deliver data-driven consulting services?",
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
      "How strongly do you believe that Disruptive Leadership training will enable our consultants to lead transformational change for clients?",
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
      "How beneficial do you think Digital Transformation Consulting training would be for enhancing our consulting methodologies and client impact?",
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
      "To what extent would Strategic AI skills improve our consultants' ability to offer cutting-edge solutions to clients?",
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
      "How likely is it that Disruptive Leadership training will position us as a leading consultancy in driving innovation?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Strategic AI", "Disruptive Leadership"],
  personalizedCourse: {
    name: "Digital Transformation Consulting",
    description:
      "This course will cover strategies for driving digital transformation, leveraging AI in consulting services, and leading transformational change for clients.",
  },
};

export const CONSULTING_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
