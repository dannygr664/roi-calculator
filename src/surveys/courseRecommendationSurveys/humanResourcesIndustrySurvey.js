const ID = "human-resources-industry-survey";

const TITLE = "1-Minute Survey for Human Resources Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Strategic HR training is essential for improving our talent acquisition and retention strategies?",
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
      "How strongly do you believe that Managing a Remote Workforce training will enhance our HR team's ability to support remote employees effectively?",
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
      "How beneficial do you think HR Technology and Digital Transformation training would be in modernizing our HR processes and systems?",
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
      "To what extent would Strategic HR training improve our organization's overall employee engagement and satisfaction?",
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
      "How likely is it that HR Technology and Digital Transformation training will improve our HR department's efficiency and effectiveness?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Strategic HR", "Managing a Remote Workforce"],
  additionalCourse: {
    name: "Women in Leadership",
    school: "Harrisburg University",
    description:
      "Focuses on effective team leadership, strategic growth, and inspiring positive change within organizations.",
  },
  personalizedCourse: {
    name: "HR Technology and Digital Transformation",
    description:
      "This course covers strategic HR, managing remote teams, and leveraging technology to transform HR processes and systems.",
  },
};

export const HUMAN_RESOURCES_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
