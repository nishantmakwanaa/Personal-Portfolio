import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  SiJavascript,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills section py-16" id="skills">
      <h2 className="section-title text-center mb-12">Skills</h2>

      <div className="skills__container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="skills__section">
          <h3 className="text-xl font-semibold mb-4">Frontend</h3>
          <div className="skills__row flex gap-4">
            <div className="skill-box p-4 border border-gray-200 rounded-md">
              <FaReact className="text-4xl text-blue-500" />
              <p className="text-sm text-gray-700">React</p>
            </div>
            <div className="skill-box p-4 border border-gray-200 rounded-md">
              <SiJavascript className="text-4xl text-yellow-500" />
              <p className="text-sm text-gray-700">JavaScript</p>
            </div>
            <div className="skill-box p-4 border border-gray-200 rounded-md">
              <SiTailwindcss className="text-4xl text-sky-500" />
              <p className="text-sm text-gray-700">Tailwind CSS</p>
            </div>
          </div>
        </div>

        <div className="skills__section">
          <h3 className="text-xl font-semibold mb-4">Backend</h3>
          <div className="skills__row flex gap-4">
            <div className="skill-box p-4 border border-gray-200 rounded-md">
              <FaNodeJs className="text-4xl text-green-600" />
              <p className="text-sm text-gray-700">Node.js</p>
            </div>
            <div className="skill-box p-4 border border-gray-200 rounded-md">
              <SiPython className="text-4xl text-blue-400" />
              <p className="text-sm text-gray-700">Python</p>
            </div>
          </div>
        </div>

        <div className="skills__section">
          <h3 className="text-xl font-semibold mb-4">Database</h3>
          <div className="skills__row flex gap-4">
            <div className="skill-box p-4 border border-gray-200 rounded-md">
              <SiMysql className="text-4xl text-blue-600" />
              <p className="text-sm text-gray-700">MySQL</p>
            </div>
            <div className="skill-box p-4 border border-gray-200 rounded-md">
              <SiPostgresql className="text-4xl text-blue-700" />
              <p className="text-sm text-gray-700">PostgreSQL</p>
            </div>
            <div className="skill-box p-4 border border-gray-200 rounded-md">
              <FaDocker className="text-4xl text-orange-500" />
              <p className="text-sm text-gray-700">Docker</p>
            </div>
            <div className="skill-box p-4 border border-gray-200 rounded-md">
              <FaGithub className="text-4xl text-black" />
              <p className="text-sm text-gray-700">GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;