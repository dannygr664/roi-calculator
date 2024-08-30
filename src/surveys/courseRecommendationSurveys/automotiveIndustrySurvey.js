const ID = "automotive-industry-survey";

const TITLE = "1-Minute Survey for Automotive Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Disruptive Leadership training will enhance our ability to lead in the evolving automotive industry?",
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
      "How strongly do you believe that Design Thinking will foster innovation in our automotive design and development processes?",
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
      "How beneficial do you think training in Sales and AI will be in improving our sales strategies and outcomes?",
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
      "To what extent would Electric Vehicle Technology and Innovation courses prepare our workforce for the shift toward electric vehicles?",
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
      "How likely is it that adopting Disruptive Leadership practices will give us a competitive edge in the automotive market?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Disruptive Leadership", "Design Thinking", "Sales and AI"],
  personalizedCourse: {
    name: "Electric Vehicle Technology and Innovation",
    description:
      "This course covers the latest trends in electric vehicle technology, design thinking for automotive innovation, and strategies for leading in the evolving automotive market.",
  },
};

export const AUTOMOTIVE_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
