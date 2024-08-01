const ID = "food-and-beverage-industry-survey";

const TITLE = "1-Minute Survey for Food and Beverage Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question: "What are the top pain points in your industry sector?",
    answers: [
      "Supply chain volatility and disruptions",
      "Increasing regulatory compliance and safety standards",
      "Rising consumer demand for sustainable and organic products",
      "Labor shortages and workforce retention",
      "Digital transformation and e-commerce adaptation",
    ],
  },
  {
    question:
      "What are the professional development training needs for your employees?",
    answers: [
      "Advanced food safety and compliance training",
      "Sustainable sourcing and supply chain management",
      "E-commerce and digital marketing strategies",
      "Employee engagement and retention strategies",
      "Innovation in product development and food technology",
    ],
  },
  {
    question:
      "Which company-specific initiatives or objectives require training to meet certain KPIs and objectives?",
    answers: [
      "Ensuring compliance with new food safety regulations",
      "Improving supply chain transparency and sustainability",
      "Enhancing digital presence and online sales",
      "Developing new, innovative products that meet consumer trends",
      "Increasing operational efficiency and reducing waste",
    ],
  },
];

const RESULTS = {
  zschoolCourses: ["Customer Experience", "Digital Marketing"],
  additionalCourse: {
    name: "Generative AI for Value Creation",
    school: "Ashland University",
    description:
      "Focuses on leveraging generative AI for organizational success, enhancing efficiency, and driving innovation.",
  },
  personalizedCourse: {
    name: "Sustainable Food and Beverage Management",
    description:
      "This course will cover sustainable sourcing, advanced supply chain management, regulatory compliance, and leveraging digital transformation and e-commerce strategies.",
  },
};

export const FOOD_AND_BEVERAGE_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
