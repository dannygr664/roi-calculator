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

export const calculateFirstRoiEstimate = (trainingCosts, surveyScore) => {
  const scaleFactor = scale(surveyScore, 1, 5, 0.1, 0.2);
  return trainingCosts * scaleFactor;
};

export const calculateSecondRoiEstimate = (numberOfEmployees, surveyScore) => {
  const roiPerEmployee = scale(surveyScore, 1, 5, 2000, 5000);
  return roiPerEmployee * numberOfEmployees;
};

export const calculateNetReturn = (
  trainingCosts,
  numberOfEmployees,
  surveyScore,
  recentlyHired
) => {
  const firstRoiEstimate = calculateFirstRoiEstimate(
    trainingCosts,
    surveyScore
  );
  const secondRoiEstimate = calculateSecondRoiEstimate(
    numberOfEmployees,
    surveyScore
  );
  const averageRoiEstimate = (firstRoiEstimate + secondRoiEstimate) / 2;

  const RECENTLY_HIRED_SCALE_FACTOR = 1.29;

  if (recentlyHired) {
    return averageRoiEstimate * RECENTLY_HIRED_SCALE_FACTOR;
  } else {
    return averageRoiEstimate;
  }
};

export const calculatePercentageReturn = (trainingCosts, netReturn) => {
  return (netReturn / trainingCosts) * 100 + 100;
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
