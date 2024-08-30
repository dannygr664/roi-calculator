const ID = "manufacturing-industry-survey";

const TITLE = "1-Minute Survey for Manufacturing Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Disruptive Leadership training will help us navigate the challenges of Industry 4.0?",
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
      "How strongly do you believe that Strategic AI training will improve our manufacturing processes and increase efficiency?",
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
      "How beneficial do you think Industry 4.0 and Smart Manufacturing training would be in helping us adopt advanced manufacturing technologies?",
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
      "To what extent would Disruptive Leadership practices improve our ability to innovate and stay competitive in the manufacturing sector?",
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
      "How likely is it that Strategic AI training will position us as a leader in smart manufacturing and digital transformation?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
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
    name: "Industry 4.0 and Smart Manufacturing",
    description:
      "This course covers disruptive leadership, strategic AI, and techniques for adopting Industry 4.0 and smart manufacturing technologies.",
  },
};

export const MANUFACTURING_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
