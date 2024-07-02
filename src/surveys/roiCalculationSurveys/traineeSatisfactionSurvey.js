import { STANDARD_ANSWERS } from "./constants";

const ID = "trainee-satisfaction-roi-survey";

const TITLE = "Internal Training Satisfaction Survey";

const INSTRUCTIONS =
  "Please indicate your level of agreement with the following statements about the internal training you completed.";

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
    question: "The duration of the training was appropriate.",
    answers: STANDARD_ANSWERS,
  },
  {
    question: "The training environment was conducive to learning.",
    answers: STANDARD_ANSWERS,
  },
  {
    question: "Overall, I am satisfied with the training I received.",
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
    "Your high satisfaction with the training is greatly appreciated. We're glad the training met your expectations and provided you with valuable knowledge and skills. Please feel free to share any specific aspects you particularly enjoyed or found most beneficial, as this will help us maintain the high quality of our training programs. Your positive feedback encourages us to continue delivering exceptional training experiences.",
  high: "Thank you for your feedback. It’s good to know that you found the training helpful and that it met most of your expectations. If there are any specific areas where you think we could improve, please let us know. Your input is invaluable as we strive to enhance our training programs. We're committed to making these sessions even more relevant and engaging for you.",
  average:
    "We appreciate your honest feedback. It seems the training provided some value but also left room for improvement. We would love to hear more about what specifically could be improved or added to make the training more effective for you. Your suggestions will be instrumental in helping us refine our training content and delivery methods.",
  low: "Thank you for sharing your thoughts. We regret that the training did not meet your expectations in several areas. Your feedback is crucial for us to understand where we went wrong and how we can improve. We would appreciate any specific comments or suggestions you can provide on what didn’t work for you. We are committed to making necessary changes to better serve your training needs.",
  lowest:
    "We are sorry to hear that the training did not meet your needs. Your feedback is very important to us, and we want to understand the specific issues you faced during the training. Please share more detailed comments on what aspects were most lacking or what improvements you would like to see. We are dedicated to making significant improvements to our training programs and ensuring that future sessions are much more effective and valuable for you.",
};

const HR_RECOMMENDATIONS = {
  highest:
    "Continue to provide similar training sessions and maintain the current standards. Consider sharing best practices from this training with other trainers.",
  high: "Identify areas where the training can be improved, such as including more interactive elements or ensuring that all content is highly relevant. Collect specific feedback from participants for targeted improvements.",
  average:
    "Review and revise training materials and methods. Consider conducting a follow-up survey to gather detailed feedback on specific aspects that need improvement. Engage with participants to understand their needs better.",
  low: "Conduct a thorough review of the training program, including content, delivery methods, and trainer effectiveness. Implement changes based on feedback and possibly re-train or support trainers. Consider additional support for participants who needed help finding the training useful.",
  lowest:
    "Immediate action is required. Meet with trainers and stakeholders to discuss the feedback and formulate a plan for significant improvements. Consider redesigning the training program from the ground up if necessary. Ensure ongoing support and follow-up with participants to address their concerns.",
};

export const TRAINEE_SATISFACTION_SURVEY = {
  id: ID,
  title: TITLE,
  instructions: INSTRUCTIONS,
  questionsAndAnswers: QUESTIONS_AND_ANSWERS,
  resultDescriptions: RESULT_DESCRIPTIONS,
  feedbackIntros: FEEDBACK_INTROS,
  hrRecommendations: HR_RECOMMENDATIONS,
};
