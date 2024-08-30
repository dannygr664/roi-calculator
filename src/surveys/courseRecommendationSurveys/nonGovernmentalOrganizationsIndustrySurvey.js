const ID = "non-governmental-organizations-survey";

const TITLE =
  "1-Minute Survey for Non-Governmental Organizations Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Strategic HR training will improve our ability to attract and retain top talent in the NGO sector?",
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
      "How strongly do you believe that Women in Leadership training will enhance gender diversity and inclusivity within our organization?",
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
      "How beneficial do you think Social Impact Measurement training would be in helping us track and communicate the effectiveness of our programs?",
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
      "How likely is it that Social Impact Measurement training will improve our ability to secure funding and partnerships?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Strategic HR", "Women in Leadership"],
  personalizedCourse: {
    name: "Social Impact Measurement",
    description:
      "This course covers strategic HR practices, leadership training for women, and methods to measure and communicate social impact effectively in NGOs.",
  },
};

export const NON_GOVERNMENTAL_ORGANIZATIONS_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
