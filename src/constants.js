import { LEARNING_SURVEY } from "./surveys/roiCalculationSurveys/learningSurvey";
import { TRAINEE_SATISFACTION_SURVEY } from "./surveys/roiCalculationSurveys/traineeSatisfactionSurvey";
import { WORKPLACE_BEHAVIOR_SURVEY } from "./surveys/roiCalculationSurveys/workplaceBehaviorSurvey";

import { BANKING_AND_FINANCE_SURVEY } from "./surveys/courseRecommendationSurveys/bankingAndFinanceSurvey";
import { ENTERTAINMENT_SURVEY } from "./surveys/courseRecommendationSurveys/entertainmentSurvey";
import { FOOD_AND_BEVERAGE_SURVEY } from "./surveys/courseRecommendationSurveys/foodAndBeverageSurvey";
import { HEALTHCARE_SURVEY } from "./surveys/courseRecommendationSurveys/healthcareSurvey";
import { HUMAN_RESOURCES_SURVEY } from "./surveys/courseRecommendationSurveys/humanResourcesSurvey";
import { MANUFACTURING_SURVEY } from "./surveys/courseRecommendationSurveys/manufacturingSurvey";
import { RETAIL_SURVEY } from "./surveys/courseRecommendationSurveys/retailSurvey";

export const CREDIT_OPTIONS = [
  "Non-Credit: 32 Hours",
  "For-Credit: 60 Hours",
  "For-Credit: 90 Hours",
];

export const CREDIT_OPTIONS_TO_METADATA = {
  "Non-Credit: 32 Hours": {
    hoursToComplete: 32,
  },
  "For-Credit: 60 Hours": {
    hoursToComplete: 60,
  },
  "For-Credit: 90 Hours": {
    hoursToComplete: 90,
  },
};

export const WAGE_TYPES = ["Hourly", "Annual"];
export const WORKING_HOURS_IN_A_YEAR = 2080;

export const ROI_METRICS = [
  "Learning",
  "Trainee Satisfaction",
  "Workplace Behavior",
];

export const ROI_METRICS_TO_SURVEYS = {
  Learning: LEARNING_SURVEY,
  "Trainee Satisfaction": TRAINEE_SATISFACTION_SURVEY,
  "Workplace Behavior": WORKPLACE_BEHAVIOR_SURVEY,
};

export const ROLES = ["HR Professional", "Employee", "Other"];

export const INDUSTRIES = [
  "Banking & Finance",
  "Entertainment",
  "Food & Beverage",
  "Healthcare",
  "Human Resources",
  "Manufacturing",
  "Retail",
];

export const INDUSTRIES_TO_SURVEYS = {
  "Banking & Finance": BANKING_AND_FINANCE_SURVEY,
  Entertainment: ENTERTAINMENT_SURVEY,
  "Food & Beverage": FOOD_AND_BEVERAGE_SURVEY,
  Healthcare: HEALTHCARE_SURVEY,
  "Human Resources": HUMAN_RESOURCES_SURVEY,
  Manufacturing: MANUFACTURING_SURVEY,
  Retail: RETAIL_SURVEY,
};
