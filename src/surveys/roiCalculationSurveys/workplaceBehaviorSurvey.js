import { STANDARD_ANSWERS } from "./constants";

const ID = "workplace-behavior-roi-survey";

const TITLE = "Post-Training Survey on Workplace Behavior";

const INSTRUCTIONS =
  "Please indicate your level of agreement with the following statements about your workplace behavior and performance after completing the training.";

const QUESTIONS_AND_ANSWERS = [
  {
    question:
      "The training has helped me better understand my job responsibilities.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "I feel more confident in my ability to perform my job tasks effectively after the training.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "I have improved my communication and collaboration with my colleagues.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "I manage my time more efficiently and meet deadlines better after the training.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "I handle workplace stress and pressure better after the training.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "I actively seek feedback and use it to improve my performance more effectively after the training.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "I am more open to learning and adopting new skills after the training.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "I take more initiative to solve problems in the workplace after the training.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "I contribute more positively to the team’s morale and work environment after the training.",
    answers: STANDARD_ANSWERS,
  },
  {
    question: "I am more satisfied with my job performance after the training.",
    answers: STANDARD_ANSWERS,
  },
];

const RESULT_DESCRIPTIONS = {
  highest:
    "The training has had a significant positive impact on your performance and confidence. Keep applying what you've learned to maintain and further this progress.",
  high: "You have shown notable improvement in your workplace behavior and performance. Continue to build on these improvements and seek further development opportunities.",
  average:
    "The training has provided some positive changes. Identifying and focusing on specific areas for further improvement will help you continue to grow.",
  low: "While some improvements are noted, there are still several areas that need attention. Consider additional support or follow-up training to address these challenges.",
  lowest:
    "The training impact seems minimal. A more personalized development plan and additional support may be necessary to achieve the desired improvements.",
};

const FEEDBACK_INTROS = {
  highest:
    "The training has had a significant positive impact on your performance and confidence. Keep applying what you've learned to maintain and further this progress.",
  high: "You have shown notable improvement in your workplace behavior and performance. Continue to build on these improvements and seek further development opportunities.",
  average:
    "The training has provided some positive changes. Identifying and focusing on specific areas for further improvement will help you continue to grow.",
  low: "While some improvements are noted, there are still several areas that need attention. Consider additional support or follow-up training to address these challenges.",
  lowest:
    "The training impact seems minimal. A more personalized development plan and additional support may be necessary to achieve the desired improvements.",
};

const HR_RECOMMENDATIONS = {
  highest:
    "Recognize and reward the positive outcomes of the training. Consider advanced training opportunities to further enhance skills.",
  high: "Continue to provide support and opportunities for further development.",
  average:
    "Offer additional resources or mentorship to target specific areas for improvement.",
  low: "Consider follow-up training sessions or one-on-one coaching to address ongoing challenges.",
  lowest:
    "Develop a personalized development plan with regular check-ins to ensure progress and address any persistent issues.",
};

export const WORKPLACE_BEHAVIOR_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  resultDescriptions: RESULT_DESCRIPTIONS,
  feedbackIntros: FEEDBACK_INTROS,
  hrRecommendations: HR_RECOMMENDATIONS,
};
