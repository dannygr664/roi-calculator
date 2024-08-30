import { LEARNING_SURVEY } from "@/surveys/roiCalculationSurveys/learningSurvey";
import { TRAINEE_SATISFACTION_SURVEY } from "@/surveys/roiCalculationSurveys/traineeSatisfactionSurvey";
import { WORKPLACE_BEHAVIOR_SURVEY } from "@/surveys/roiCalculationSurveys/workplaceBehaviorSurvey";

import { AGRICULTURE_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/agricultureIndustrySurvey";
import { ARCHITECTURE_AND_ENGINEERING_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/architectureAndEngineeringIndustrySurvey";
import { ARTIFICIAL_INTELLIGENCE_AND_MACHINE_LEARNING_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/artificialIntelligenceAndMachineLearningIndustrySurvey";
import { AUTOMOTIVE_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/automotiveIndustrySurvey";
import { BANKING_AND_FINANCE_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/bankingAndFinanceIndustrySurvey";
import { CLOTHING_AND_APPAREL_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/clothingAndApparelIndustrySurvey";
import { CONSTRUCTION_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/constructionIndustrySurvey";
import { CONSULTING_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/consultingIndustrySurvey";
import { CRYPTOCURRENCY_AND_BLOCKCHAIN_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/cryptocurrencyAndBlockchainIndustrySurvey";
import { DEFENSE_AND_MILITARY_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/defenseAndMilitaryIndustrySurvey";
import { E_COMMERCE_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/eCommerceIndustrySurvey";
import { EDUCATION_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/educationIndustrySurvey";
import { ENVIRONMENTAL_SERVICES_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/environmentalServicesIndustrySurvey";
import { FISHING_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/fishingIndustrySurvey";
import { FOOD_AND_BEVERAGE_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/foodAndBeverageIndustrySurvey";
import { FORESTRY_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/forestryIndustrySurvey";
import { GENERAL_BUSINESS_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/generalBusinessIndustrySurvey";
import { GENERAL_RETAIL_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/generalRetailIndustrySurvey";
import { GOVERNMENT_ORGANIZATIONS_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/governmentOrganizationsIndustrySurvey";
import { HEALTHCARE_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/healthcareIndustrySurvey";
import { HOSPITALITY_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/hospitalityIndustrySurvey";
import { HUMAN_RESOURCES_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/humanResourcesIndustrySurvey";
import { INFORMATION_TECHNOLOGY_AND_SOFTWARE_SERVICES_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/informationTechnologyAndSoftwareServicesIndustrySurvey";
import { LEGAL_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/legalIndustrySurvey";
import { MANUFACTURING_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/manufacturingIndustrySurvey";
import { MEDIA_AND_ENTERTAINMENT_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/mediaAndEntertainmentIndustrySurvey";
import { MINING_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/miningIndustrySurvey";
import { MINING_AND_METALS_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/miningAndMetalsIndustrySurvey";
import { NON_GOVERNMENTAL_ORGANIZATIONS_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/nonGovernmentalOrganizationsIndustrySurvey";
import { NON_PROFIT_ORGANIZATIONS_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/nonProfitOrganizationsIndustrySurvey";
import { OIL_AND_GAS_EXTRACTION_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/oilAndGasExtractionIndustrySurvey";
import { PUBLIC_ADMINISTRATION_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/publicAdministrationIndustrySurvey";
import { REAL_ESTATE_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/realEstateIndustrySurvey";
import { RENEWABLE_ENERGY_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/renewableEnergyIndustrySurvey";
import { RESEARCH_AND_TRAINING_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/researchAndTrainingIndustrySurvey";
import { SCIENCE_AND_TECHNICAL_SERVICES_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/scienceAndTechnicalServicesIndustrySurvey";
import { SPACE_EXPLORATION_AND_COMMERCIALIZATION_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/spaceExplorationAndCommercializationIndustrySurvey";
import { SPECIALTY_RETAIL_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/specialtyRetailIndustrySurvey";
import { TELECOMMUNICATIONS_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/telecommunicationsIndustrySurvey";
import { TOURISM_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/tourismIndustrySurvey";
import { TRANSPORTATION_AND_LOGISTICS_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/transportationAndLogisticsIndustrySurvey";
import { WHOLESALE_TRADE_INDUSTRY_SURVEY } from "@/surveys/courseRecommendationSurveys/wholesaleTradeIndustrySurvey";

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
  "Agriculture",
  "Architecture and Engineering",
  "Artificial Intelligence and Machine Learning",
  "Automotive",
  "Banking and Finance",
  "Clothing and Apparel",
  "Construction",
  "Consulting",
  "Cryptocurrency and Blockchain",
  "Defense and Military",
  "E-commerce",
  "Education",
  "Environmental Services",
  "Fishing",
  "Food and Beverage",
  "Forestry",
  "General Business",
  "General Retail",
  "Government Organizations",
  "Healthcare",
  "Hospitality",
  "Human Resources",
  "Information Technology and Software Services",
  "Legal",
  "Manufacturing",
  "Media and Entertainment",
  "Mining",
  "Mining and Metals",
  "Non-Governmental Organizations",
  "Non-Profit Organizations (All)",
  "Oil and Gas Extraction",
  "Public Administration",
  "Real Estate",
  "Renewable Energy",
  "Research and Training",
  "Science and Technical Services",
  "Space Exploration and Commercialization",
  "Specialty Retail",
  "Telecommunications",
  "Tourism",
  "Transportation and Logistics",
  "Wholesale Trade",
];

export const INDUSTRIES_TO_SURVEYS = {
  Agriculture: AGRICULTURE_INDUSTRY_SURVEY,
  "Architecture and Engineering": ARCHITECTURE_AND_ENGINEERING_INDUSTRY_SURVEY,
  "Artificial Intelligence and Machine Learning":
    ARTIFICIAL_INTELLIGENCE_AND_MACHINE_LEARNING_INDUSTRY_SURVEY,
  Automotive: AUTOMOTIVE_INDUSTRY_SURVEY,
  "Banking and Finance": BANKING_AND_FINANCE_INDUSTRY_SURVEY,
  "Clothing and Apparel": CLOTHING_AND_APPAREL_INDUSTRY_SURVEY,
  Construction: CONSTRUCTION_INDUSTRY_SURVEY,
  Consulting: CONSULTING_INDUSTRY_SURVEY,
  "Cryptocurrency and Blockchain":
    CRYPTOCURRENCY_AND_BLOCKCHAIN_INDUSTRY_SURVEY,
  "Defense and Military": DEFENSE_AND_MILITARY_INDUSTRY_SURVEY,
  "E-commerce": E_COMMERCE_INDUSTRY_SURVEY,
  Education: EDUCATION_INDUSTRY_SURVEY,
  "Environmental Services": ENVIRONMENTAL_SERVICES_INDUSTRY_SURVEY,
  Fishing: FISHING_INDUSTRY_SURVEY,
  "Food and Beverage": FOOD_AND_BEVERAGE_INDUSTRY_SURVEY,
  Forestry: FORESTRY_INDUSTRY_SURVEY,
  "General Business": GENERAL_BUSINESS_INDUSTRY_SURVEY,
  "General Retail": GENERAL_RETAIL_INDUSTRY_SURVEY,
  "Government Organizations": GOVERNMENT_ORGANIZATIONS_INDUSTRY_SURVEY,
  Healthcare: HEALTHCARE_INDUSTRY_SURVEY,
  Hospitality: HOSPITALITY_INDUSTRY_SURVEY,
  "Human Resources": HUMAN_RESOURCES_INDUSTRY_SURVEY,
  "Information Technology and Software Services":
    INFORMATION_TECHNOLOGY_AND_SOFTWARE_SERVICES_INDUSTRY_SURVEY,
  Legal: LEGAL_INDUSTRY_SURVEY,
  Manufacturing: MANUFACTURING_INDUSTRY_SURVEY,
  "Media and Entertainment": MEDIA_AND_ENTERTAINMENT_INDUSTRY_SURVEY,
  Mining: MINING_INDUSTRY_SURVEY,
  "Mining and Metals": MINING_AND_METALS_INDUSTRY_SURVEY,
  "Non-Governmental Organizations":
    NON_GOVERNMENTAL_ORGANIZATIONS_INDUSTRY_SURVEY,
  "Non-Profit Organizations (All)": NON_PROFIT_ORGANIZATIONS_INDUSTRY_SURVEY,
  "Oil and Gas Extraction": OIL_AND_GAS_EXTRACTION_INDUSTRY_SURVEY,
  "Public Administration": PUBLIC_ADMINISTRATION_INDUSTRY_SURVEY,
  "Real Estate": REAL_ESTATE_INDUSTRY_SURVEY,
  "Renewable Energy": RENEWABLE_ENERGY_INDUSTRY_SURVEY,
  "Research and Training": RESEARCH_AND_TRAINING_INDUSTRY_SURVEY,
  "Science and Technical Services":
    SCIENCE_AND_TECHNICAL_SERVICES_INDUSTRY_SURVEY,
  "Space Exploration and Commercialization":
    SPACE_EXPLORATION_AND_COMMERCIALIZATION_INDUSTRY_SURVEY,
  "Specialty Retail": SPECIALTY_RETAIL_INDUSTRY_SURVEY,
  Telecommunications: TELECOMMUNICATIONS_INDUSTRY_SURVEY,
  Tourism: TOURISM_INDUSTRY_SURVEY,
  "Transportation and Logistics": TRANSPORTATION_AND_LOGISTICS_INDUSTRY_SURVEY,
  "Wholesale Trade": WHOLESALE_TRADE_INDUSTRY_SURVEY,
};

export const ZSCHOOL_COURSES_TO_DESCRIPTIONS = {
  "AI and Healthcare":
    "Focuses on the application of AI in healthcare, improving patient outcomes, and understanding AI's impact on healthcare operations.",
  "Customer Experience":
    "Focuses on creating effective customer experience strategies, developing customer personas, and improving customer journeys.",
  "Design Thinking":
    "Provides tools and techniques for creative problem-solving, emphasizing user-centered design and innovative thinking in product and service development.",
  "Digital Accelerator":
    "Equips participants with skills to accelerate digital transformation, focusing on adopting new technologies, agile practices, and innovation.",
  "Digital Marketing":
    "Empowers participants with integrated marketing strategies, content marketing, social media strategies, and digital transformation.",
  "Disruptive Leadership":
    "Teaches participants how to challenge the status quo, drive transformative change, and inspire innovation within their organizations.",
  "Emergent Leadership":
    "Focuses on developing leadership skills that adapt to emerging challenges and opportunities in dynamic business environments.",
  "Generative AI":
    "Introduces generative AI technologies and their applications, focusing on creative uses in content generation and problem-solving.",
  "Innovative Collaboration":
    "Covers strategic innovation, customer experience of emerging media, design thinking, and data analytics for emerging media.",
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
  "Transformative Leadership":
    "Develops leadership skills focused on driving transformational change, inspiring teams, and achieving long-term business goals.",
  "Women in Leadership":
    "Empowers women with leadership skills, focusing on overcoming challenges, building networks, and advancing in their careers.",
};
