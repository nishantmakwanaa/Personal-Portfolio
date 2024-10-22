import React from "react";
import codeEditorProject from "../assets/codeEditorProject.png";
import eWasteRecyclingApp from "../assets/eWasteRecyclingApp.jpg";
import handsFreePcController from "../assets/handsFreePcController.png";
import humanPostureDetectionApp from "../assets/humanPostureDetectionApp.png";
import portfolioProject from "../assets/portfolioProject.png";
import jobPortalProject from "../assets/jobPortalProject.png";

const Projects = () => {
  return (
    <section class="work section" id="work">
      <h2 class="section-title">Projects</h2>
      <div class="work__container bd-grid">
        <div class="work__item">
          <a
            href="https://aicodeeditor.vercel.app/"
            class="work__img"
            target="_blank"
          >
            <img
              src={codeEditorProject}
              alt="AI Code Editor Project"
              class="skills__img"
            />
            <span class="text-overlay">Project Link</span>
          </a>
          <div class="work__description">
            <h3 class="work__title">AI Code Editor</h3>
            <p class="work__details">
              An AI-Powered Code Editor That Enhances Coding Experience With
              Intelligent Code Suggestions And Syntax Highlighting.
            </p>
          </div>
        </div>

        <div class="work__item">
          <a
            href="https://github.com/nishantmakwanaa/E-Waste-Recycling-App/"
            class="work__img"
            target="_blank"
          >
            <img
              src={eWasteRecyclingApp}
              alt="E-Waste Recycling Project"
              class="skills__img"
            />
            <span class="text-overlay">Project Link</span>
          </a>
          <div class="work__description">
            <h3 class="work__title">E-Waste Recycling App</h3>
            <p class="work__details">
              An AI-Assisted E-Waste Recycling Platform That Guides Users
              Through Eco-Friendly Disposal Practices And Connects Them With
              Trusted Recycling Services.
            </p>
          </div>
        </div>

        <div class="work__item">
          <a
            href="https://github.com/nishantmakwanaa/Hands-Free-PC-Controller"
            class="work__img"
            target="_blank"
          >
            <img
              src={handsFreePcController}
              alt="Job Recruitment Portal Project"
              class="skills__img"
            />
            <span class="text-overlay">Project Link</span>
          </a>
          <div class="work__description">
            <h3 class="work__title">Hands-Free PC Controller</h3>
            <p class="work__details">
              An AI-Powered PC Controller That Enables Complete Hands-Free
              Operation Through Voice, Gesture, And Eye Tracking For A Seamless
              User Experience.
            </p>
          </div>
        </div>

        <div class="work__item">
          <a
            href="https://github.com/nishantmakwanaa/Human-Posture-Detection-App"
            class="work__img"
            target="_blank"
          >
            <img
              src={humanPostureDetectionApp}
              alt="Job Recruitment Portal Project"
              class="skills__img"
            />
            <span class="text-overlay">Project Link</span>
          </a>
          <div class="work__description">
            <h3 class="work__title">Human Posture Detection App</h3>
            <p class="work__details">
              An AI-Driven Posture Detection App That Monitors And Corrects Your
              Posture in Real-Time, Promoting Healthier Habits And Reducing
              Physical Strain.
            </p>
          </div>
        </div>

        <div class="work__item">
          <a
            href="https://www.nishantworldwide.in"
            class="work__img"
            target="_blank"
          >
            <img
              src={portfolioProject}
              alt="Personal Portfolio Project"
              class="skills__img"
            />
            <span class="text-overlay">Project Link</span>
          </a>
          <div class="work__description">
            <h3 class="work__title">Personal Portfolio</h3>
            <p class="work__details">
              Nishant'S Professional Portfolio Showcasing Skills, Projects, And
              Achievements, Designed For A Modern And Interactive Experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
