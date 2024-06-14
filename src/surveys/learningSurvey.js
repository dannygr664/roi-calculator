import { STANDARD_ANSWERS } from "./constants";

const TITLE = "Post Learning Professional Development Survey";

const INSTRUCTIONS =
  "Please indicate your level of agreement with the following statements about the professional development training you received, funded by the company.";

const QUESTIONS_AND_ANSWERS = [
  {
    question: "The training objectives were clear and well-defined.",
    answers: STANDARD_ANSWERS,
  },
];

export const LEARNING_SURVEY = {
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
};
