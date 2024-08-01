const ID = "manufacturing-industry-survey";

const TITLE =
  "1-Minute Survey for Manufacturing Industry Service Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question: "What are the top pain points in your industry sector?",
    answers: [
      "Supply chain disruptions and material shortages",
      "Workforce skills gap and talent retention",
      "Technological advancements and automation",
      "Regulatory compliance and quality control",
      "Sustainability and environmental impact",
    ],
  },
  {
    question:
      "What are the professional development training needs for your employees?",
    answers: [
      "Supply chain management and logistics",
      "Advanced manufacturing technologies and automation",
      "Quality control and regulatory compliance",
      "Sustainable manufacturing practices",
      "Workforce development and retention strategies",
    ],
  },
  {
    question:
      "Which company-specific initiatives or objectives require training to meet certain KPIs and objectives?",
    answers: [
      "Improving supply chain resilience and efficiency",
      "Adopting advanced manufacturing technologies",
      "Ensuring regulatory compliance and maintaining quality standards",
      "Implementing sustainable manufacturing practices",
      "Developing and retaining a skilled workforce",
    ],
  },
];

const RESULTS = {
  zschoolCourses: ["Disruptive Leadership", "Strategic AI"],
  additionalCourse: {
    name: "Engineering Leadership",
    school: "Ashland University",
    description:
      "Focuses on leading engineering teams, developing interpersonal skills, and creating a positive corporate culture.",
  },
  personalizedCourse: {
    name: "Innovative Manufacturing Strategies",
    description:
      "This course will address supply chain resilience, workforce development, technological advancements, regulatory compliance, and sustainable manufacturing practices. It aims to equip participants with the skills and knowledge needed to navigate and overcome current industry challenges effectively.",
  },
};

export const MANUFACTURING_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
