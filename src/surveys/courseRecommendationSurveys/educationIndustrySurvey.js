const ID = "education-industry-survey";

const TITLE = "1-Minute Survey for Education Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Strategic HR training is crucial for attracting and retaining top talent in education?",
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
      "How strongly do you believe that Women in Leadership training will promote gender diversity and inclusivity within our educational institution?",
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
      "How beneficial do you think EdTech and Online Learning Innovations training would be for improving our teaching methods and student engagement?",
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
      "To what extent would Strategic HR practices improve our organization's overall efficiency and employee satisfaction?",
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
      "How likely is it that integrating EdTech innovations will enhance our institution's reputation and student outcomes?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Strategic HR", "Women in Leadership"],
  personalizedCourse: {
    name: "EdTech and Online Learning Innovations",
    description:
      "This course covers the latest innovations in educational technology, online learning strategies, and methods to enhance student engagement and outcomes.",
  },
};

export const EDUCATION_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
