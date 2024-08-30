const ID = "media-and-entertainment-industry-survey";

const TITLE =
  "1-Minute Survey for Media and Entertainment Industry Professionals";

const INSTRUCTIONS =
  "Please answer the following questions about the training needs in your industry sector.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "To what extent do you agree that Digital Marketing training is essential for expanding our reach and audience engagement in the media industry?",
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
      "How strongly do you believe that Disruptive Leadership training will enable our teams to lead innovation in content creation and distribution?",
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
      "How beneficial do you think Digital Content Creation and Distribution training would be in enhancing our content strategy and execution?",
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
      "To what extent would Strategic AI training improve our ability to analyze audience data and personalize content?",
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
      "How likely is it that Disruptive Leadership training will position us as a leader in the rapidly evolving media landscape?",
    answers: ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"],
  },
];

const RESULTS = {
  zschoolCourses: [
    "Digital Marketing",
    "Disruptive Leadership",
    "Strategic AI",
  ],
  additionalCourse: {
    name: "Strategic AI",
    school: "University of San Francisco",
    description:
      "Focuses on navigating AI's transformative potential, developing AI strategies, and implementing AI-driven innovations.",
  },
  personalizedCourse: {
    name: "Digital Content Creation and Distribution",
    description:
      "This course covers digital marketing, disruptive leadership, and strategies for digital content creation and distribution in the media industry.",
  },
};

export const MEDIA_AND_ENTERTAINMENT_INDUSTRY_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  results: RESULTS,
};
