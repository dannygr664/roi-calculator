const ID = "research-and-training-industry-survey";

const TITLE =
  "1-Minute Survey for Research and Training Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Strategic HR training is crucial for attracting and retaining top research talent?",
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
      "How strongly do you believe that Transformative Leadership training will improve our ability to lead cutting-edge research initiatives?",
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
      "How beneficial do you think Advanced Research Methodologies training would be in enhancing our research capabilities and outcomes?",
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
      "To what extent would Strategic HR practices improve our research team's collaboration and productivity?",
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
      "How likely is it that Advanced Research Methodologies training will position our organization as a leader in research and development?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Strategic HR", "Transformative Leadership"],
  personalizedCourse: {
    name: "Advanced Research Methodologies",
    description:
      "This course covers strategic HR practices, transformative leadership, and advanced methodologies to enhance research capabilities and outcomes.",
  },
};

export const RESEARCH_AND_TRAINING_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
