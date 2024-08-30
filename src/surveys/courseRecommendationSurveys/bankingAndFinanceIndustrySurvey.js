const ID = "banking-and-finance-industry-survey";

const TITLE =
  "1-Minute Survey for Financial Technology and Banking Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Personal Finance training could significantly enhance our employees' ability to serve clients better?",
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
      "How strongly do you believe that Strategic AI will optimize our financial services and decision-making processes?",
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
      "How beneficial do you think Fintech Innovations and Blockchain training will be in keeping our team ahead of industry trends?",
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
      "To what extent would adopting Strategic AI improve our operational efficiency in banking and finance?",
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
      "How likely is it that Fintech Innovations and Blockchain courses will help us better integrate emerging technologies into our services?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["Personal Finance", "Strategic AI"],
  additionalCourse: {
    name: "IT and Cybersecurity Leadership",
    school: "Harrisburg University",
    description:
      "Teaches addressing cybersecurity from a business perspective, understanding regulations, and developing comprehensive cybersecurity strategies.",
  },
  personalizedCourse: {
    name: "Fintech Innovations and Blockchain",
    description:
      "This course covers regulatory compliance, cybersecurity, fintech innovation, and strategies for talent acquisition and upskilling in the banking and finance sector.",
  },
};

export const BANKING_AND_FINANCE_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
