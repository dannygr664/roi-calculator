const ID = "banking-and-finance-industry-survey";

const TITLE =
  "1-Minute Survey for Financial Technology and Banking Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question: "What are the top pain points in your industry sector?",
    answers: [
      "Regulatory compliance and risk management",
      "Cybersecurity threats and data privacy",
      "Digital transformation and fintech competition",
      "Customer trust and satisfaction",
      "Talent acquisition and upskilling",
    ],
  },
  {
    question:
      "What are the professional development training needs for your employees?",
    answers: [
      "Advanced regulatory compliance and risk management",
      "Cybersecurity and data protection",
      "Digital banking and fintech innovation",
      "Customer relationship management and trust-building",
      "Leadership and strategic thinking",
    ],
  },
  {
    question:
      "Which company-specific initiatives or objectives require training to meet certain KPIs and objectives?",
    answers: [
      "Enhancing regulatory compliance and risk mitigation",
      "Strengthening cybersecurity measures and data privacy",
      "Driving digital transformation and fintech integration",
      "Improving customer trust and satisfaction",
      "Upskilling employees for strategic and leadership roles",
    ],
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
    name: "Fintech and Digital Banking Strategies",
    description:
      "This course will cover regulatory compliance, cybersecurity, fintech innovation, building customer trust, and strategies for talent acquisition and upskilling in the banking and finance sector.",
  },
};

export const BANKING_AND_FINANCE_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
