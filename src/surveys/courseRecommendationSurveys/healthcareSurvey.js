const ID = "healthcare-industry-survey";

const TITLE = "1-Minute Survey for Healthcare Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question: "What are the top pain points in your industry sector?",
    answers: [
      "Healthcare worker shortages and burnout",
      "Regulatory compliance and patient safety",
      "Technological advancements in medical care",
      "Patient experience and satisfaction",
      "Rising operational costs and financial pressures",
    ],
  },
  {
    question:
      "What are the professional development training needs for your employees?",
    answers: [
      "Advanced clinical skills and patient care techniques",
      "Healthcare compliance and patient safety protocols",
      "Telehealth and digital health technologies",
      "Patient communication and satisfaction",
      "Financial management and cost reduction strategies",
    ],
  },
  {
    question:
      "Which company-specific initiatives or objectives require training to meet certain KPIs and objectives?",
    answers: [
      "Enhancing clinical skills and patient care",
      "Ensuring compliance with healthcare regulations",
      "Implementing and optimizing telehealth services",
      "Improving patient experience and satisfaction",
      "Reducing operational costs and increasing efficiency",
    ],
  },
];

const RESULTS = {
  zschoolCourses: [
    {
      name: "Strategic AI for Healthcare Professionals",
      description:
        "Focuses on the application of AI in healthcare, improving patient outcomes, and understanding AI's impact on healthcare operations.",
    },
  ],
  additionalCourse: {
    name: "Strategic AI in Healthcare",
    school: "Ashland University",
    description:
      "Covers AI integration in healthcare, enhancing patient care, and developing data-driven healthcare strategies.",
  },
  personalizedCourse: {
    name: "Advanced Healthcare Management",
    description:
      "Focus on managing healthcare worker well-being, ensuring regulatory compliance, integrating new medical technologies, improving patient satisfaction, and reducing operational costs.",
  },
};

export const HEALTHCARE_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
