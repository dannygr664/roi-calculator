import PropTypes from "prop-types";

import "./Survey.css";

function Survey({ title, instructions, questionsAndAnswers }) {
  return (
    <div className="survey">
      <h3>{title}</h3>
      <p>
        <b>Instructions: </b>
        {instructions}
      </p>
      <div className="survey-questions">
        {questionsAndAnswers.map(({ question, answers }, questionIndex) => (
          <div key={questionIndex} className="survey-question">
            <p>
              {questionIndex + 1}. {question}
            </p>
            {answers.map((answer, answerIndex) => (
              <label key={answerIndex} className="survey-answer">
                <input
                  type="radio"
                  name={"question-" + questionIndex}
                  value={"answer-" + answerIndex}
                />
                <span>{answer}</span>
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

Survey.propTypes = {
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  questionsAndAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
};

export default Survey;
