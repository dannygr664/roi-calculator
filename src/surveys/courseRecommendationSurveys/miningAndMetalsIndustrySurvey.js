const ID = "mining-and-metals-industry-survey";

const TITLE = "1-Minute Survey for Mining and Metals Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Advanced Metallurgy and Materials Science training is essential for staying competitive in the mining and metals industry?",
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
      "How strongly do you believe that training in Advanced Metallurgy will improve our product quality and innovation capabilities?",
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
      "How beneficial do you think Advanced Metallurgy and Materials Science training would be in enhancing our ability to meet industry standards and client expectations?",
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
      "To what extent would adopting Advanced Metallurgy practices improve our operational efficiency and cost-effectiveness?",
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
      "How likely is it that Advanced Metallurgy and Materials Science training will enhance our ability to innovate and lead in the mining and metals sector?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: [],
  personalizedCourse: {
    name: "Advanced Metallurgy and Materials Science",
    description:
      "This course covers advanced metallurgy, materials science, and strategies to enhance innovation, quality, and cost-effectiveness in the mining and metals industry.",
  },
};

export const MINING_AND_METALS_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
