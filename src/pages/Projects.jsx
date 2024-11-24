import codeEditorProject from "../assets/aiCodeEditor.png";
import eWasteRecyclingApp from "../assets/eWasteRecycling.png";
import yogaAssistant from "../assets/yogaAssistant.png";

const Projects = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Projects</h2>
      <div className="work__container bd-grid">
        <div className="work__item">
          <a
            href="https://aicodeeditor.vercel.app/"
            className="work__img"
            target="_blank"
          >
            <img
              src={codeEditorProject}
              alt="AI Code Editor Project"
              className="skills__img"
            />
            <span className="text-overlay">Project Link</span>
          </a>
          <div className="work__description">
            <h3 className="work__title">AI Code Editor</h3>
            <p className="work__details">
              An AI-Powered Code Editor That Enhances Coding Experience With
              Intelligent Code Suggestions And Syntax Highlighting.
            </p>
          </div>
        </div>

        <div className="work__item">
          <a
            href="https://wasterecycling.vercel.app/"
            className="work__img"
            target="_blank"
          >
            <img
              src={eWasteRecyclingApp}
              alt="E-Waste Recycling Project"
              className="skills__img"
            />
            <span className="text-overlay">Project Link</span>
          </a>
          <div className="work__description">
            <h3 className="work__title">E-Waste Recycling App</h3>
            <p className="work__details">
              An AI-Assisted E-Waste Recycling Platform That Guides Users
              Through Eco-Friendly Disposal Practices And Connects Them With
              Trusted Recycling Services.
            </p>
          </div>
        </div>

        <div className="work__item">
          <a
            href="https://yogaassistant.vercel.app/"
            className="work__img"
            target="_blank"
          >
            <img
              src={yogaAssistant}
              alt="Job Recruitment Portal Project"
              className="skills__img"
            />
            <span className="text-overlay">Project Link</span>
          </a>
          <div className="work__description">
            <h3 className="work__title">AI Yoga Assistant App</h3>
            <p className="work__details">
              An AI-Powered Yoga App That Enables Complete Humanless Assistance
              Through Voice & Posture Assistance For A Seamless Yoga Experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
