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

export const COURSES_TO_METADATA = {
  bigData: {
    name: "Big Data",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  customerExperience1: {
    name: "Customer Experience 1",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  customerExperience2: {
    name: "Customer Experience 2",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  designThinking: {
    name: "Design Thinking",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  digitalMarketing: {
    name: "Digital Marketing",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  engineeringLeadership: {
    name: "Engineering Leadership",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  executiveEducationAdvisorTraining: {
    name: "Executive Education Advisor Training",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  generateAiAndValuation: {
    name: "Generative AI & Valuation",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  greenTechnologiesAndAi: {
    name: "Green Technologies and AI",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  instructorCertificateProgram: {
    name: "Instructor Certificate Program",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  itCybersecurityLeadershipTeams: {
    name: "IT & Cybersecurity Leadership Teams",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  mentorCertificateProgram: {
    name: "Mentor Certificate Program",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  strategicAi: {
    name: "Strategic AI",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  strategicAiForHealthcareProfessionals: {
    name: "Strategic AI for Healthcare Professionals",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  strategicAiForHrProfessionals: {
    name: "Strategic AI for HR Professionals",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  strategicAiInSales: {
    name: "Strategic AI in Sales",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  transformationLeadership: {
    name: "Transformation Leadership",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
  womenInLeadership: {
    name: "Women in Leadership",
    satisfactionSurveyScore: 0.5,
    preAssessmentScore: 0.3,
    postAssessmentScore: 0.8,
    behavioralAssessmentScore: 0.7,
  },
};

export const CREDIT_OPTIONS = [
  "Non-Credit",
  "For-Credit: 60 Hours",
  "For-Credit: 90 Hours",
];

export const CREDIT_OPTIONS_TO_METADATA = {
  "Non-Credit": {
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
