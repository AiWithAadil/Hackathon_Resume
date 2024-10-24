const AboutMe = () => (
    <section className="box-glow p-6 md:p-8 bg-gradient-to-r from-black to-gray-900 rounded-xl shadow-lg w-11/12 md:w-3/4 mx-auto mt-6">
      <h3 className="text-4xl font-extrabold mb-8 text-teal-50 text-center underline decoration-wavy glow">
        About Me
      </h3>
      <div className="space-y-8 text-center">
        <div className="border-b pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
          <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
            Passion for Data Engineering
          </p>
          <p className="text-lg text-gray-400 mb-3 italic">
            I am a dedicated student of <span className="text-teal-400 glow">Generative AI</span> and a passionate <span className="text-teal-400 glow">data engineer</span>, committed to harnessing the power of data to drive insights and innovation. My journey began at <span className="text-teal-400 glow">Saylani Mass IT Training Program</span>, where I developed a solid foundation in data engineering, mastering tools such as <span className="text-teal-400 glow">Python</span>, <span className="text-teal-400 glow">SQL</span>, and <span className="text-teal-400 glow">Snowflake</span>.
          </p>
        </div>
  
        <div className="pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
          <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
            Expanding Knowledge in AI
          </p>
          <p className="text-lg text-gray-400 mb-3 italic">
            Currently, I am expanding my knowledge in Generative AI through hands-on learning at the <span className="text-teal-400 glow">Governor House</span>, exploring its applications and potential to revolutionize various industries. I thrive on the challenges of transforming raw data into meaningful information, utilizing my skills to design efficient <span className="text-teal-400 glow">data pipelines</span> and implement robust solutions.
          </p>
        </div>
      </div>
    </section>
  );
  
  export default AboutMe;
  