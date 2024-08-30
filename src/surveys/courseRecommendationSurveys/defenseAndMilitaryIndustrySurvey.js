const ID = "defense-and-military-industry-survey";

const TITLE = "1-Minute Survey for Defense and Military Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that IT and Cybersecurity Leadership training is essential for enhancing our defense strategies?",
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
      "How strongly do you believe that Disruptive Leadership training will prepare our leaders for the challenges of modern warfare?",
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
      "How beneficial do you think Advanced Cyber Warfare Strategies training would be in bolstering our cyber defense capabilities?",
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
      "To what extent would integrating Generative AI improve our military's operational efficiency and decision-making?",
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
      "How likely is it that Strategic AI training will enhance our defense readiness and strategic planning?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: [
    "IT and Cybersecurity Leadership",
    "Disruptive Leadership",
    "Strategic AI",
    "Generative AI",
  ],
  personalizedCourse: {
    name: "Advanced Cyber Warfare Strategies",
    description:
      "This course covers advanced strategies for cyber warfare, integrating AI into defense operations, and enhancing military cybersecurity leadership.",
  },
};

export const DEFENSE_AND_MILITARY_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
