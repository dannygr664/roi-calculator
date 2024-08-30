const ID = "science-and-technical-services-industry-survey";

const TITLE =
  "1-Minute Survey for Science and Technical Services Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that IT and Cybersecurity Leadership training is essential for safeguarding our scientific data and infrastructure?",
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
      "How strongly do you believe that Strategic AI training will enhance our ability to innovate and deliver advanced technical services?",
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
      "How beneficial do you think Scientific Innovation and Commercialization training would be in bringing our research and products to market?",
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
      "To what extent would IT and Cybersecurity Leadership training improve our ability to protect intellectual property and maintain client trust?",
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
      "How likely is it that Strategic AI training will position us as a leader in the science and technical services industry?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["IT and Cybersecurity Leadership", "Strategic AI"],
  personalizedCourse: {
    name: "Scientific Innovation and Commercialization",
    description:
      "This course covers IT and cybersecurity leadership, strategic AI, and techniques for scientific innovation and commercialization.",
  },
};

export const SCIENCE_AND_TECHNICAL_SERVICES_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
