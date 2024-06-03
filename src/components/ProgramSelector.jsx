import PropTypes from "prop-types";

function ProgramSelector({ selectedProgram, onProgramChange }) {
  return (
    <div>
      <label htmlFor="program-dropdown">Program: </label>
      <select
        id="program-dropdown"
        value={selectedProgram}
        onChange={(e) => onProgramChange(e.target.value)}
      >
        <option value="">Select a Program</option>
        <option value="bigData">Big Data</option>
        <option value="customerExperience1">Customer Experience 1</option>
        <option value="customerExperience2">Customer Experience 2</option>
        <option value="designThinking">Design Thinking</option>
        <option value="digitalMarketing">Digital Marketing</option>
        <option value="engineeringLeadership">Engineering Leadership</option>
        <option value="executiveEducationAdvisorTraining">
          Executive Education Advisor Training
        </option>
        <option value="generativeAiAndValuation">
          Generative AI & Valuation
        </option>
        <option value="greenTechnologiesAndAi">
          Green Technologies and AI
        </option>
        <option value="instructorCertificateProgram">
          Instructor Certificate Program
        </option>
        <option value="itAndCybersecurityLeadershipTeams">
          IT & Cybersecurity Leadership Teams
        </option>
        <option value="mentorCertificateProgram">
          Mentor Certificate PRogram
        </option>
        <option value="strategicAi">Strategic AI</option>
        <option value="strategicAiForHealthcareProfessionals">
          Strategic AI for Healthcare Professionals
        </option>
        <option value="strategicAiForHrProfessionals">
          Strategic AI for HR Professionals
        </option>
        <option value="strategicAiInSales">Strategic AI in Sales</option>
        <option value="transformationLeadership">
          Transformation Leadership
        </option>
        <option value="womenInLeadership">Women in Leadership</option>
      </select>
    </div>
  );
}

ProgramSelector.propTypes = {
  selectedProgram: PropTypes.string.isRequired,
  onProgramChange: PropTypes.func.isRequired,
};

export default ProgramSelector;
