import "./Intro.css";

function Intro() {
  return (
    <section className="intro">
      <section className="intro-and-form">
        <p>
          This tool will calculate your estimated return on investment following
          Zschool training, using various metrics.
        </p>
        <p>
          Begin by selecting your course of interest, your company’s industry,
          and the number of employees you wish to enroll.
        </p>

        <form>
          <div className="form-row">
            <div className="form-element">
              <label htmlFor="course">Course</label>
              <div className="custom-select">
                <select id="course" name="course">
                  <option value="">Select</option>
                  <option value="bigData">Big Data</option>
                  <option value="customerExperience1">
                    Customer Experience 1
                  </option>
                  <option value="customerExperience2">
                    Customer Experience 2
                  </option>
                  <option value="designThinking">Design Thinking</option>
                  <option value="digitalMarketing">Digital Marketing</option>
                  <option value="engineeringLeadership">
                    Engineering Leadership
                  </option>
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
                  <option value="strategicAiInSales">
                    Strategic AI in Sales
                  </option>
                  <option value="transformationLeadership">
                    Transformation Leadership
                  </option>
                  <option value="womenInLeadership">Women in Leadership</option>
                </select>
              </div>
            </div>

            <div className="form-element">
              <label htmlFor="industry">Industry</label>
              <div className="custom-select">
                <select id="industry" name="industry">
                  <option value="">Select</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-element">
            <label htmlFor="employees">Number of Employees</label>
            <input type="number" id="employees" name="employees" value="0" />
          </div>
        </form>
      </section>
      <aside>
        <img
          src="images/roi-intro.jpg"
          alt="ROI Calculator Intro"
          className="intro-image"
        />
      </aside>
    </section>
  );
}

export default Intro;
