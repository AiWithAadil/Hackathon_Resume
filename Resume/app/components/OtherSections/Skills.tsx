const Skills = () => (
  <section className="box-glow skills p-6 md:p-8 bg-gradient-to-r from-black to-gray-900 rounded-xl shadow-lg w-11/12 md:w-3/4 mx-auto mt-6">
    <h3 className="text-4xl font-extrabold mb-8 text-teal-50 text-center underline decoration-wavy glow">
      Professional Skills
    </h3>
    <div className="space-y-8 text-center">
      <div className="border-b pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
        <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
          🎯 Project Management
        </p>
        <ul className="text-lg text-gray-400 mb-3 italic">
          <li>Project Planning</li>
          <li>Agile Methodologies</li>
          <li>Team Leadership</li>
          <li>Data Engineering</li>
          <li>SEO</li>
          <li>Web Development</li>
        </ul>
      </div>

      <div className="border-b pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
        <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
          💻 Programming Languages
        </p>
        <ul className="text-lg text-gray-400 mb-3 italic">
          <li>Python</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>SQL</li>
        </ul>
      </div>

      <div className="pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
        <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
          🛠️ Tools & Technologies
        </p>
        <ul className="text-lg text-gray-400 mb-3 italic">
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>AWS</li>
          <li>Kafka</li>
          <li>Airflow</li>
          <li>Snowflake</li>
          <li>Docker</li>
          <li>ETL</li>
          <li>EDA</li>
          <li>Linux</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
