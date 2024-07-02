import { STANDARD_ANSWERS, PERCENTAGE_ANSWERS } from "./constants";

const ID = "learning-roi-survey";

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

const RESULT_DESCRIPTIONS = {
  highest:
    "Excellent! It appears that the professional development training met or exceeded your expectations and has positively impacted your job performance. We are delighted that you found it highly beneficial.",
  high: "Good! It seems the professional development training was helpful and met most of your expectations. Your feedback is appreciated, and we will strive to make further improvements.",
  average:
    "Average. The training provided some value, but there are areas for improvement. Your feedback is valuable and will be used to enhance future training sessions.",
  low: "Below Average. The training did not meet your expectations in several areas. We appreciate your honesty and will review your feedback to make necessary changes.",
  lowest:
    "Poor. The training did not meet your needs. Your detailed feedback will be crucial in making significant improvements to our training program.",
};

const FEEDBACK_INTROS = {
  highest:
    "Your high satisfaction with the professional development training is greatly appreciated. We're glad the training met your expectations and provided you with valuable knowledge and skills. Please feel free to share any specific aspects you particularly enjoyed or found most beneficial, as this will help us maintain the high quality of our training programs. Your positive feedback encourages us to continue delivering exceptional training experiences.",
  high: "Thank you for your feedback. It’s good to know that you found the professional development training helpful and that it met most of your expectations. If there are any specific areas where you think we could improve, please let us know. Your input is invaluable as we strive to enhance our training programs. We're committed to making these sessions even more relevant and engaging for you.",
  average:
    "We appreciate your honest feedback. It seems the training provided some value but also left room for improvement. We would love to hear more about what specifically could be improved or added to make the training more effective for you. Your suggestions will be instrumental in helping us refine our training content and delivery methods.",
  low: "Thank you for sharing your thoughts. We regret that the training did not meet your expectations in several areas. Your feedback is crucial for us to understand where we went wrong and how we can improve. We would appreciate any specific comments or suggestions you can provide on what didn’t work for you. We are committed to making necessary changes to better serve your training needs.",
  lowest:
    "We are sorry to hear that the training did not meet your needs. Your feedback is very important to us, and we want to understand the specific issues you faced during the training. Please share more detailed comments on what aspects were most lacking or what improvements you would like to see. We are dedicated to making significant improvements to our training programs and ensuring that future sessions are much more effective and valuable for you.",
};

const HR_RECOMMENDATIONS = {
  highest:
    "Continue investing in similar professional development programs. Consider sharing success stories and best practices from this training with other employees.",
  high: "Identify areas for enhancement based on feedback. Ensure future programs include more interactive elements and practical applications relevant to job roles.",
  average:
    "Review and revise the training program to better meet employees' needs. Conduct follow-up surveys to gather detailed feedback on specific aspects that require improvement.",
  low: "Conduct a thorough review of the training content and delivery methods. Engage with employees to understand their needs and make targeted improvements to the training program.",
  lowest:
    "Immediate action is required. Hold meetings with stakeholders to discuss feedback and formulate a plan for significant improvements. Consider redesigning the training program if necessary and ensure ongoing support for employees.",
};

export const LEARNING_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  resultDescriptions: RESULT_DESCRIPTIONS,
  feedbackIntros: FEEDBACK_INTROS,
  hrRecommendations: HR_RECOMMENDATIONS,
};
