const ID = "transportation-and-logistics-industry-survey";

const TITLE =
  "1-Minute Survey for Transportation and Logistics Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Disruptive Leadership training is essential for navigating the challenges in the transportation and logistics industry?",
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
      "How strongly do you believe that Innovative Collaboration training will improve our ability to streamline operations and reduce costs?",
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
      "How beneficial do you think Supply Chain Optimization training would be in enhancing our efficiency and customer satisfaction?",
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
      "To what extent would Generative AI improve our ability to predict and respond to supply chain disruptions?",
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
      "How likely is it that Supply Chain Optimization training will give us a competitive advantage in the logistics industry?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: [
    "Disruptive Leadership",
    "Innovative Collaboration",
    "Generative AI",
  ],
  personalizedCourse: {
    name: "Supply Chain Optimization",
    description:
      "Covers techniques and strategies to enhance the efficiency, resilience, and responsiveness of supply chains, focusing on reducing costs, improving logistics, and ensuring a smooth flow of goods from production to delivery.",
  },
};

export const TRANSPORTATION_AND_LOGISTICS_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
