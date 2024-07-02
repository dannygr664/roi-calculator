import { scale } from "@/utils/utilities/utilities";

import { STANDARD_ANSWERS } from "@/surveys/roiCalculationSurveys/constants";

const isQuestionIncluded = (questionAndAnswers) => {
  return questionAndAnswers.answers.length === 5;
};

const scoreQuestion = (answer) => {
  const score = STANDARD_ANSWERS.indexOf(answer) + 1;
  if (score === 0) {
    throw new RangeError("Invalid answer choice");
  }
  return score;
};

export const calculateSurveyScore = (questionsAndAnswers, values) => {
  let rawScore = 0;
  let numQuestionsIncludedInScore = 0;

  questionsAndAnswers.forEach((questionAndAnswers, questionIndex) => {
    if (isQuestionIncluded(questionAndAnswers)) {
      rawScore += scoreQuestion(values[`question-${questionIndex}`]);
      numQuestionsIncludedInScore++;
    }
  });

  return Math.round((rawScore / numQuestionsIncludedInScore) * 10) / 10;
};

export const calculatePercentageReturn = (surveyScore) => {
  return scale(surveyScore, 1, 5, -100, 100);
};

export const calculateNetReturn = (percentageReturn, trainingCosts) => {
  return (1 + percentageReturn / 100) * parseFloat(trainingCosts);
};

export const getScoreBucketName = (surveyScore) => {
  if (4.5 <= surveyScore && surveyScore <= 5.0) {
    return "highest";
  } else if (3.5 <= surveyScore && surveyScore < 4.5) {
    return "high";
  } else if (2.5 <= surveyScore && surveyScore < 3.5) {
    return "average";
  } else if (1.5 <= surveyScore && surveyScore < 2.5) {
    return "low";
  } else if (1.0 <= surveyScore && surveyScore < 1.5) {
    return "lowest";
  } else {
    throw new RangeError("Survey score is out of range");
  }
};
