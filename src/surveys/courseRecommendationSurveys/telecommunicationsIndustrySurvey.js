const ID = "telecommunications-industry-survey";

const TITLE = "1-Minute Survey for Telecommunications Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that IT and Cybersecurity Leadership training is critical for protecting our telecommunications infrastructure?",
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
      "How strongly do you believe that Strategic AI training will enhance our ability to develop and deploy advanced telecommunications technologies?",
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
      "How beneficial do you think 5G Technologies and Applications training would be in positioning us as a leader in the telecom industry?",
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
      "To what extent would Sales and AI training improve our ability to offer personalized services and grow our customer base?",
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
      "How likely is it that 5G Technologies and Applications training will enable us to stay ahead of competitors in the telecommunications market?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: [
    "IT and Cybersecurity Leadership",
    "Strategic AI",
    "Generative AI",
    "Sales and AI",
  ],
  personalizedCourse: {
    name: "5G Technologies and Applications",
    description:
      "Provides an in-depth understanding of 5G technologies, including the underlying infrastructure, key features, and practical applications across various industries to enhance connectivity and drive innovation.",
  },
};

export const TELECOMMUNICATIONS_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
