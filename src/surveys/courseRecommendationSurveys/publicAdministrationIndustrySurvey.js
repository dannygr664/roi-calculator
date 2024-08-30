const ID = "public-administration-industry-survey";

const TITLE =
  "1-Minute Survey for Public Administration Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that IT and Cybersecurity Leadership training is crucial for securing public sector information systems?",
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
      "How strongly do you believe that Disruptive Leadership training will enhance our leaders' ability to manage public sector challenges?",
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
      "How beneficial do you think Public Policy and Administration training would be in improving our ability to deliver effective public services?",
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
      "To what extent would IT and Cybersecurity Leadership training improve our ability to safeguard critical infrastructure?",
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
      "How likely is it that Disruptive Leadership training will position our organization as a leader in public sector innovation?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["IT and Cybersecurity Leadership", "Disruptive Leadership"],
  personalizedCourse: {
    name: "Public Policy and Administration",
    description:
      "This course covers IT and cybersecurity leadership, disruptive leadership, and strategies for effective public policy and administration.",
  },
};

export const PUBLIC_ADMINISTRATION_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
