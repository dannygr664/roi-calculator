const ID = "healthcare-industry-survey";

const TITLE = "1-Minute Survey for Healthcare Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Strategic HR training will enhance our ability to attract and retain top talent in the healthcare sector?",
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
      "How strongly do you believe that AI and Healthcare training will improve our clinical decision-making and patient outcomes?",
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
      "How beneficial do you think Healthcare Data Analytics training would be in enhancing our ability to analyze patient data and improve healthcare delivery?",
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
      "To what extent would IT and Cybersecurity Leadership training improve our ability to protect sensitive patient data and ensure compliance with regulations?",
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
      "How likely is it that integrating AI and Healthcare practices will lead to significant advancements in our healthcare services?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: [
    "Strategic HR",
    "AI and Healthcare",
    "IT and Cybersecurity Leadership",
  ],
  additionalCourse: {
    name: "Strategic AI in Healthcare",
    school: "Ashland University",
    description:
      "Covers AI integration in healthcare, enhancing patient care, and developing data-driven healthcare strategies.",
  },
  personalizedCourse: {
    name: "Healthcare Data Analytics",
    description:
      "This course covers strategic HR in healthcare, AI for clinical decision-making, and data analytics to improve healthcare delivery and patient outcomes.",
  },
};

export const HEALTHCARE_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
