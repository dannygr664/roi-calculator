const ID = "retail-industry-survey";

const TITLE = "1-Minute Survey for Retail Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question: "What are the top pain points in your industry sector?",
    answers: [
      "Supply chain disruptions",
      "Need for omnichannel retail strategies",
      "Personalization of customer experience",
      "Sustainability and environmental concerns",
      "Technological adaptation (e.g., AI, automation)",
    ],
  },
  {
    question:
      "What are the professional development training needs for your employees?",
    answers: [
      "Advanced supply chain management and logistics",
      "Omnichannel retail integration and strategy",
      "Customer relationship management and personalization techniques",
      "Sustainable business practices and compliance",
      "Technology adoption and digital transformation skills",
    ],
  },
  {
    question:
      "Which company-specific initiatives or objectives require training to meet certain KPIs and objectives?",
    answers: [
      "Reducing supply chain inefficiencies and delays",
      "Enhancing customer satisfaction and engagement",
      "Achieving sustainability targets and certifications",
      "Improving operational efficiency through technology",
      "Meeting sales and revenue growth targets through innovative retail strategies",
    ],
  },
];

const RESULTS = {
  zschoolCourse: {
    name: "Customer Experience Program",
    description:
      "Focuses on creating effective customer experience strategies, developing customer personas, and improving customer journeys.",
  },
  additionalCourse: {
    name: "Transformative Leadership",
    school: "Ashland University",
    description:
      "Teaches implementing effective organizational change, improving communication, and fostering a positive corporate culture.",
  },
  personalizedCourse: {
    name: "Retail Innovation and Strategy: Navigating the Future",
    description:
      "Focus on advanced supply chain management, omnichannel retail integration, customer personalization, sustainable practices, and adopting new technologies like AI and automation.",
  },
};

export const RETAIL_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
