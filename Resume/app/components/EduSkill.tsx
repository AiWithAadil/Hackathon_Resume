const EducationAndSkills = () => (
  <div className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto mt-6 white rounded-md bg-white">
    {/* Education Section */}
    <section className="box-glow p-6 md:p-8 bg-cyan-600 bg-opacity-90 rounded-xl shadow-lg md:max-w-sm">
      <h3 className="text-xl font-extrabold mb-4 text-teal-50 text-center underline glow">
      <span className="text-red-600 text-2xl">E</span>ducation
      </h3>
      <div className="space-y-8 text-center">
        <div className="border-b pb-2">
          <p className="text-md font-semibold text-white">
            Saylani Mass IT Training Program
          </p>
          <p className="text-sm text-gray-300">
            <span className="glow text-black">Data Engineering</span> | 2024
          </p>
        </div>
        <div className="border-b pb-2">
          <p className="text-md font-semibold text-white tracking-wide">
            Governor House
          </p>
          <p className="text-sm text-gray-300">
            <span className="glow text-black">GenAI Studies</span> | 2024
          </p>
        </div>
        <div className="pb-2">
          <p className="text-md font-semibold text-white">
            Government Commerce College
          </p>
          <p className="text-sm text-gray-300 italic">
            <span className="glow text-black">Part 2</span> | 2022
          </p>
        </div>
      </div>
    </section>

    {/* Skills Section */}
    <section className="box-glow p-6 md:p-10 bg-cyan-600 bg-opacity-90 rounded-xl shadow-lg md:max-w-2xl">
      <h3 className="text-xl font-extrabold mb-4 text-teal-50 text-center underline glow">
        <span className="text-red-600 text-2xl">P</span>rofessional <span className="text-red-600 text-2xl">S</span>kills
      </h3>
      <div className="space-y-4 text-center">
        <div className="border-b pb-2">
          <p className="text-md font-semibold text-white mb-2">
            Programming Languages
          </p>
          <ul className="text-sm text-gray-300 italic">
            <li>Python, JavaScript, TypeScript, SQL</li>
          </ul>
        </div>

        <div className="pb-2">
          <p className="text-md font-semibold text-white mb-2 tracking-wide">
            Tools & Technologies
          </p>
          <ul className="text-sm text-gray-300 italic">
            <li>Next.js, Tailwind CSS, AWS, Kafka, Snowflake, ETL, Airflow, Docker, linux, EDA</li>
          </ul>
        </div>
        <div className="border-b pb-2">
          <p className="text-md font-semibold text-white mb-2 tracking-wide">
            Project Management
          </p>
          <ul className="text-sm text-gray-300 italic">
            <li>Project Planning, Agile Methodologies, Team Leadership, Data Engineering, SEO, Web Development</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default EducationAndSkills;
