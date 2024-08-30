const ID = "information-technology-and-software-services-industry-survey";

const TITLE =
  "1-Minute Survey for Information Technology and Software Services Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that IT and Cybersecurity Leadership training is crucial for safeguarding our IT infrastructure?",
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
      "How strongly do you believe that Strategic AI training will enable us to develop and implement cutting-edge software solutions?",
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
      "How beneficial do you think DevOps and Cloud Computing training would be in streamlining our software development processes?",
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
      "To what extent would IT and Cybersecurity Leadership training improve our ability to respond to and mitigate cyber threats?",
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
      "How likely is it that DevOps and Cloud Computing training will enhance our agility and responsiveness in software development?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: ["IT and Cybersecurity Leadership", "Strategic AI"],
  personalizedCourse: {
    name: "DevOps and Cloud Computing",
    description:
      "This course covers IT and cybersecurity leadership, strategic AI, and techniques for implementing DevOps and cloud computing to enhance software development.",
  },
};

export const INFORMATION_TECHNOLOGY_AND_SOFTWARE_SERVICES_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
