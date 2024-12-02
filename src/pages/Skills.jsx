import { FaReact, FaNodeJs, FaDocker, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills section py-16" id="skills">
      <h2 className="section-title text-center mb-12">Skills</h2>

      <div className="skills__container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        <div className="skills__box p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <FaReact className="text-8xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold">React</h3>
        </div>

        <div className="skills__box p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <SiJavascript className="text-8xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold">JavaScript</h3>
        </div>

        <div className="skills__box p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <SiTailwindcss className="text-8xl text-sky-500 mb-4" />
          <h3 className="text-xl font-semibold">Tailwind CSS</h3>
        </div>

        <div className="skills__box p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <FaNodeJs className="text-8xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold">Node.js</h3>
        </div>

        <div className="skills__box p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <SiPython className="text-8xl text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold">Python</h3>
        </div>
        <div className="skills__box p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <SiMysql className="text-8xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold">MySQL</h3>
        </div>

        <div className="skills__box p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <SiPostgresql className="text-8xl text-blue-700 mb-4" />
          <h3 className="text-xl font-semibold">PostgreSQL</h3>
        </div>

        <div className="skills__box p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <FaGithub className="text-8xl text-black mb-4" />
          <h3 className="text-xl font-semibold">GitHub</h3>
        </div>

        <div className="skills__box p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <FaDocker className="text-8xl text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold">Docker</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
