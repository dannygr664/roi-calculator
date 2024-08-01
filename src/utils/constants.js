import { LEARNING_SURVEY } from "@/surveys/roiCalculationSurveys/learningSurvey";
import { TRAINEE_SATISFACTION_SURVEY } from "@/surveys/roiCalculationSurveys/traineeSatisfactionSurvey";
import { WORKPLACE_BEHAVIOR_SURVEY } from "@/surveys/roiCalculationSurveys/workplaceBehaviorSurvey";

import { BANKING_AND_FINANCE_SURVEY } from "@/surveys/courseRecommendationSurveys/bankingAndFinanceSurvey";
import { MEDIA_AND_ENTERTAINMENT_SURVEY } from "@/surveys/courseRecommendationSurveys/mediaAndEntertainmentSurvey";
import { FOOD_AND_BEVERAGE_SURVEY } from "@/surveys/courseRecommendationSurveys/foodAndBeverageSurvey";
import { HEALTHCARE_SURVEY } from "@/surveys/courseRecommendationSurveys/healthcareSurvey";
import { HUMAN_RESOURCES_SURVEY } from "@/surveys/courseRecommendationSurveys/humanResourcesSurvey";
import { MANUFACTURING_SURVEY } from "@/surveys/courseRecommendationSurveys/manufacturingSurvey";
import { SPECIALTY_RETAIL_SURVEY } from "@/surveys/courseRecommendationSurveys/specialtyRetailSurvey";

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
  "Banking and Finance",
  "Food and Beverage",
  "Healthcare",
  "Human Resources",
  "Manufacturing",
  "Media and Entertainment",
  "Specialty Retail",
];

export const INDUSTRIES_TO_SURVEYS = {
  "Banking and Finance": BANKING_AND_FINANCE_SURVEY,
  "Food and Beverage": FOOD_AND_BEVERAGE_SURVEY,
  Healthcare: HEALTHCARE_SURVEY,
  "Human Resources": HUMAN_RESOURCES_SURVEY,
  Manufacturing: MANUFACTURING_SURVEY,
  "Media and Entertainment": MEDIA_AND_ENTERTAINMENT_SURVEY,
  "Specialty Retail": SPECIALTY_RETAIL_SURVEY,
};

export const ZSCHOOL_COURSES_TO_DESCRIPTIONS = {
  "AI and Healthcare":
    "Focuses on the application of AI in healthcare, improving patient outcomes, and understanding AI's impact on healthcare operations.",
  "Customer Experience":
    "Focuses on creating effective customer experience strategies, developing customer personas, and improving customer journeys.",
  "Digital Marketing":
    "Empowers participants with integrated marketing strategies, content marketing, social media strategies, and digital transformation.",
  "Disruptive Leadership":
    "Teaches participants how to challenge the status quo, drive transformative change, and inspire innovation within their organizations.",
  "IT and Cybersecurity Leadership":
    "Teaches addressing cybersecurity from a business perspective, understanding regulations, and developing comprehensive cybersecurity strategies.",
  "Managing a Remote Workforce":
    "Provides participants with strategies and tools to effectively lead, motivate, and support a distributed team, ensuring productivity and collaboration.",
  "Personal Finance":
    "Guides participants in mastering financial principles to manage their money, make informed decisions, and achieve long-term financial stability.",
  "Sales and AI":
    "Guides participants in integrating artificial intelligence into sales processes to enhance customer engagement, streamline operations, and boost revenue growth.",
  "Strategic AI":
    "Equips participants with the knowledge to harness artificial intelligence for strategic planning, fostering innovation, and enhancing business performance.",
  "Strategic HR":
    "Covers the fundamentals of HR, employee experience management, and strategic HR planning.",
};
