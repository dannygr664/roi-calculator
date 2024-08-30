const ID = "government-organizations-industry-survey";

const TITLE = "1-Minute Survey for Government Organizations";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that IT and Cybersecurity Leadership training is essential for protecting our organization against cyber threats?",
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
      "How strongly do you believe that Disruptive Leadership training will prepare our leaders to navigate the complexities of government operations?",
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
      "How beneficial do you think Public Sector Innovation and Management training would be in improving our service delivery and public trust?",
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
      "To what extent would Strategic AI training improve our ability to make data-driven decisions and enhance operational efficiency?",
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
      "How likely is it that IT and Cybersecurity Leadership training will strengthen our organization's resilience against emerging threats?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["IT and Cybersecurity Leadership", "Disruptive Leadership"],
  personalizedCourse: {
    name: "Public Sector Innovation and Management",
    description:
      "This course covers cybersecurity leadership, disruptive leadership, and strategies for innovation and management in the public sector.",
  },
};

export const GOVERNMENT_ORGANIZATIONS_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
