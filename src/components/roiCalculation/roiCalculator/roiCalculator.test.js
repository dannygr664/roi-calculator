import { describe, expect, it } from "vitest";
import {
  calculateSurveyScore,
  calculatePercentageReturn,
  calculateNetReturn,
  getScoreBucketName,
} from "./roiCalculator";
import {
  STANDARD_ANSWERS,
  PERCENTAGE_ANSWERS,
} from "@/surveys/roiCalculationSurveys/constants";

describe("calculateSurveyScore", () => {
  const TWO_QUESTIONS_AND_ANSWERS = [
    { question: "Question 1", answers: STANDARD_ANSWERS },
    { question: "Question 2", answers: STANDARD_ANSWERS },
  ];

  it("returns 1.0 for all answers set to 'Strongly disagree'", () => {
    expect(
      calculateSurveyScore(TWO_QUESTIONS_AND_ANSWERS, {
        "question-0": "Strongly disagree",
        "question-1": "Strongly disagree",
      })
    ).toBe(1.0);
  });

  it("returns 2.0 for all answers set to 'Disagree'", () => {
    expect(
      calculateSurveyScore(TWO_QUESTIONS_AND_ANSWERS, {
        "question-0": "Disagree",
        "question-1": "Disagree",
      })
    ).toBe(2.0);
  });

  it("returns 3.0 for all answers set to 'Neutral'", () => {
    expect(
      calculateSurveyScore(TWO_QUESTIONS_AND_ANSWERS, {
        "question-0": "Neutral",
        "question-1": "Neutral",
      })
    ).toBe(3.0);
  });

  it("returns 4.0 for all answers set to 'Agree'", () => {
    expect(
      calculateSurveyScore(TWO_QUESTIONS_AND_ANSWERS, {
        "question-0": "Agree",
        "question-1": "Agree",
      })
    ).toBe(4.0);
  });

  it("returns 5.0 for all answers set to 'Strongly agree'", () => {
    expect(
      calculateSurveyScore(TWO_QUESTIONS_AND_ANSWERS, {
        "question-0": "Strongly agree",
        "question-1": "Strongly agree",
      })
    ).toBe(5.0);
  });

  it("returns average of different answer choices", () => {
    expect(
      calculateSurveyScore(TWO_QUESTIONS_AND_ANSWERS, {
        "question-0": "Strongly agree",
        "question-1": "Agree",
      })
    ).toBe(4.5);
  });

  const THREE_QUESTIONS_AND_ANSWERS = [
    { question: "Question 1", answers: STANDARD_ANSWERS },
    { question: "Question 2", answers: STANDARD_ANSWERS },
    { question: "Question 3", answers: STANDARD_ANSWERS },
  ];

  it("rounds average to nearest tenth (rounding down)", () => {
    expect(
      calculateSurveyScore(THREE_QUESTIONS_AND_ANSWERS, {
        "question-0": "Strongly agree",
        "question-1": "Agree",
        "question-2": "Agree",
      })
    ).toBe(4.3);
  });

  it("rounds average to nearest tenth (rounding up)", () => {
    expect(
      calculateSurveyScore(THREE_QUESTIONS_AND_ANSWERS, {
        "question-0": "Strongly agree",
        "question-1": "Agree",
        "question-2": "Strongly agree",
      })
    ).toBe(4.7);
  });

  it("ignores questions with non-standard answers", () => {
    expect(
      calculateSurveyScore(
        [
          ...TWO_QUESTIONS_AND_ANSWERS,
          { question: "Question 3", answers: PERCENTAGE_ANSWERS },
        ],
        {
          "question-0": "Strongly agree",
          "question-1": "Strongly agree",
          "question-2": "0–10%",
        }
      )
    ).toBe(5.0);
  });
});

describe("calculatePercentageReturn", () => {
  it("returns -100 for a survey score of 1.0", () => {
    expect(calculatePercentageReturn(1.0)).toBe(-100);
  });

  it("returns -75 for a survey score of 1.5", () => {
    expect(calculatePercentageReturn(1.5)).toBe(-75);
  });

  it("returns -50 for a survey score of 2.0", () => {
    expect(calculatePercentageReturn(2.0)).toBe(-50);
  });

  it("returns -25 for a survey score of 2.5", () => {
    expect(calculatePercentageReturn(2.5)).toBe(-25);
  });

  it("returns 0 for a survey score of 3.0", () => {
    expect(calculatePercentageReturn(3.0)).toBe(0);
  });

  it("returns 25 for a survey score of 3.5", () => {
    expect(calculatePercentageReturn(3.5)).toBe(25);
  });

  it("returns 50 for a survey score of 4.0", () => {
    expect(calculatePercentageReturn(4.0)).toBe(50);
  });

  it("returns 75 for a survey score of 4.5", () => {
    expect(calculatePercentageReturn(4.5)).toBe(75);
  });

  it("returns 100 for a survey score of 5.0", () => {
    expect(calculatePercentageReturn(5.0)).toBe(100);
  });

  it("returns 65 for a survey score of 4.3", () => {
    expect(calculatePercentageReturn(4.3)).toBe(65);
  });
});

describe("calculateNetReturn", () => {
  it("returns 0 when percentage return is -100", () => {
    expect(calculateNetReturn(-100, "100")).toBe(0);
  });

  it("returns training costs when percentage return is 0", () => {
    expect(calculateNetReturn(0, "100")).toBe(100);
  });

  it("returns doubled training costs when percentage return is 100", () => {
    expect(calculateNetReturn(100, "100")).toBe(200);
  });
});

describe("getScoreBucketName", () => {
  it("returns 'highest' when survey score is 5.0", () => {
    expect(getScoreBucketName(5.0)).toBe("highest");
  });

  it("returns 'highest' when survey score is between 4.5 and 5.0", () => {
    expect(getScoreBucketName(4.7)).toBe("highest");
  });

  it("returns 'highest' when survey score is 4.5", () => {
    expect(getScoreBucketName(4.5)).toBe("highest");
  });

  it("returns 'high' when survey score is between 3.5 and 4.5", () => {
    expect(getScoreBucketName(4.0)).toBe("high");
  });

  it("returns 'high' when survey score is 3.5", () => {
    expect(getScoreBucketName(3.5)).toBe("high");
  });

  it("returns 'average' when survey score is between 2.5 and 3.5", () => {
    expect(getScoreBucketName(3.0)).toBe("average");
  });

  it("returns 'average' when survey score is 2.5", () => {
    expect(getScoreBucketName(2.5)).toBe("average");
  });

  it("returns 'low' when survey score is between 1.5 and 2.5", () => {
    expect(getScoreBucketName(2.0)).toBe("low");
  });

  it("returns 'low' when survey score is 1.5", () => {
    expect(getScoreBucketName(1.5)).toBe("low");
  });

  it("returns 'lowest' when survey score is between 1.0 and 1.5", () => {
    expect(getScoreBucketName(1.3)).toBe("lowest");
  });

  it("returns 'lowest' when survey score is 1.0", () => {
    expect(getScoreBucketName(1.0)).toBe("lowest");
  });

  it("throws an error when the survey score is greater than 5.0", () => {
    expect(() => getScoreBucketName(5.1)).toThrowError(
      /^Survey score is out of range$/
    );
  });

  it("throws an error when the survey score is less than 1.0", () => {
    expect(() => getScoreBucketName(0.9)).toThrowError(
      /^Survey score is out of range$/
    );
  });
});
