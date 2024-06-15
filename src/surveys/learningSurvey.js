import { STANDARD_ANSWERS, PERCENTAGE_ANSWERS } from "./constants";

const TITLE = "Post Learning Professional Development Survey";

const INSTRUCTIONS =
  "Please indicate your level of agreement with the following statements about the professional development training you received, funded by the company.";

const QUESTIONS_AND_ANSWERS = [
  {
    question: "The training objectives were clear and well-defined.",
    answers: STANDARD_ANSWERS,
  },
  {
    question: "The content of the training was relevant to my job.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "The trainer was knowledgeable and effectively communicated the material.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "The training materials (e.g., handouts, slides) were helpful and well-prepared.",
    answers: STANDARD_ANSWERS,
  },
  {
    question: "The training included practical examples and exercises.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "The training session was interactive and encouraged participation.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "I feel more confident in my abilities after completing this training.",
    answers: STANDARD_ANSWERS,
  },
  {
    question: "The training has positively impacted my job performance.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "I have been able to apply the skills and knowledge learned in the training to my job.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "Overall, I am satisfied with the investment the company made in my professional development.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "The assignments provided during the training were relevant and beneficial to my job role.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "The training has equipped me with industry knowledge that is essential for my role.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "The training has improved my ability to handle job-specific tasks.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "The assignments have enhanced my problem-solving skills related to my job.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "The training has helped me to better understand the latest trends and developments in our industry.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      " I believe the training will contribute to improving the company’s ROI.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "Approximately what percentage do you feel this course can help improve the company’s ROI?",
    answers: PERCENTAGE_ANSWERS,
  },
  {
    question:
      "The training has provided me with new strategies to increase my productivity.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "I feel better equipped to contribute to my team's success after this training.",
    answers: STANDARD_ANSWERS,
  },
  {
    question:
      "The professional development training met my overall expectations.",
    answers: STANDARD_ANSWERS,
  },
];

export const LEARNING_SURVEY = {
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
};
