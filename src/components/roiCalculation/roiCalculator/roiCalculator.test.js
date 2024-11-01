import { describe, expect, it } from "vitest";
import {
  calculateSurveyScore,
  calculateFirstRoiEstimate,
  calculateSecondRoiEstimate,
  calculateNetReturn,
  calculatePercentageReturn,
  getScoreBucketName,
} from "./roiCalculator";
import { STANDARD_ANSWERS } from "@/surveys/roiCalculationSurveys/constants";

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
});

describe("calculateFirstRoiEstimate", () => {
  it("returns 10% of training costs for a survey score of 1.0", () => {
    expect(calculateFirstRoiEstimate("100", 1.0)).toBeCloseTo(10, 5);
  });

  it("returns 15% of training costs for a survey score of 3.0", () => {
    expect(calculateFirstRoiEstimate("100", 3.0)).toBeCloseTo(15, 5);
  });

  it("returns 20% of training costs for a survey score of 5.0", () => {
    expect(calculateFirstRoiEstimate("100", 5.0)).toBeCloseTo(20, 5);
  });

  it("returns 0 if training costs are $0", () => {
    expect(calculateFirstRoiEstimate("0", 5.0)).toBeCloseTo(0, 5);
  });
});

describe("calculateSecondRoiEstimate", () => {
  it("returns $2000 times the number of employees for a survey score of 1.0", () => {
    expect(calculateSecondRoiEstimate("2", 1.0)).toBeCloseTo(4000, 5);
  });

  it("returns $3500 times the number of employees for a survey score of 3.0", () => {
    expect(calculateSecondRoiEstimate("2", 3.0)).toBeCloseTo(7000, 5);
  });

  it("returns $5000 times the number of employees for a survey score of 5.0", () => {
    expect(calculateSecondRoiEstimate("2", 5.0)).toBeCloseTo(10000, 5);
  });

  it("returns $0 if number of employees is 0", () => {
    expect(calculateSecondRoiEstimate("0", 5.0)).toBeCloseTo(0, 5);
  });
});

describe("calculateNetReturn", () => {
  it("returns average of first and second ROI estimates if training costs and number of employees are non-zero and recentlyHired is false", () => {
    expect(calculateNetReturn("5000", "2", 5.0, false)).toBeCloseTo(5500, 5);
  });

  it("returns 0 if training costs and number of employees are 0 and recentlyHired is false", () => {
    expect(calculateNetReturn("0", "0", 5.0, false)).toBeCloseTo(0, 5);
  });

  it("returns average of second ROI estimate and 0 if training costs are 0 and number of employees is non-zero and recentlyHired is false", () => {
    expect(calculateNetReturn("0", "2", 5.0, false)).toBeCloseTo(5000, 5);
  });

  it("returns average of first and second ROI estimates times 1.29 if training costs and number of employees are non-zero and recentlyHired is true", () => {
    expect(calculateNetReturn("5000", "2", 5.0, true)).toBeCloseTo(7095, 5);
  });

  it("returns 0 if training costs and number of employees are 0 and recentlyHired is true", () => {
    expect(calculateNetReturn("0", "0", 5.0, true)).toBeCloseTo(0, 5);
  });

  it("returns average of second ROI estimate and 0 times 1.29 if training costs are 0 and number of employees is non-zero and recentlyHired is true", () => {
    expect(calculateNetReturn("0", "2", 5.0, true)).toBeCloseTo(6450, 5);
  });
});

describe("calculatePercentageReturn", () => {
  it("returns net return divided by training costs times 100 plus 100 if training costs are non-zero", () => {
    expect(calculatePercentageReturn("100", 20)).toBeCloseTo(120, 5);
  });

  it("returns NaN if training costs and net return are 0", () => {
    expect(calculatePercentageReturn("0", 0)).toBeNaN();
  });

  it("returns Infinity if training costs are 0 and net return is non-zero", () => {
    expect(calculatePercentageReturn("0", 20)).toBe(Infinity);
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
