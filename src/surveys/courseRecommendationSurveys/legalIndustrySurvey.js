const ID = "legal-industry-survey";

const TITLE = "1-Minute Survey for Legal Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that IT and Cybersecurity Leadership training is critical for protecting sensitive client data in our legal practice?",
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
      "How strongly do you believe that Strategic HR training will improve our legal team's efficiency and job satisfaction?",
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
      "How beneficial do you think AI for Legal Professionals training would be in enhancing our ability to analyze legal data and predict case outcomes?",
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
      "To what extent would Legal Technology and AI Applications training improve our firm's ability to manage cases and deliver results for clients?",
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
      "How likely is it that IT and Cybersecurity Leadership training will enhance our ability to protect client information and comply with regulations?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["IT and Cybersecurity Leadership", "Strategic HR"],
  personalizedCourse: {
    name: "AI for Legal Professionals",
    description:
      "This course covers IT and cybersecurity leadership, strategic HR for legal teams, and AI applications for legal data analysis and case management.",
  },
};

export const LEGAL_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
