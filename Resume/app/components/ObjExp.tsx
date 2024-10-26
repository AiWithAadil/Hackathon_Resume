const Objective = () => (
  <div className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto mt-6 bg-white rounded-md">
    {/* Objective Section */}
    <section className="box-glow p-6 md:p-8 bg-cyan-600 bg-opacity-90 rounded-xl shadow-lg md:max-w-sm">
      <h3 className="text-xl font-extrabold mb-3 text-white text-center underline glow">
        <span className="text-red-600 text-3xl">O</span>bjective
      </h3>
      <div className="space-y-4 text-center">
        <p className="text-sm text-white mb-3 italic">
          My objective is to leverage my knowledge and skills in <span className="text-black glow">data engineering</span> and Generative AI to contribute to innovative projects that drive data-driven decision-making and enhance operational efficiencies. I aim to continuously expand my expertise in developing scalable <span className="text-black">data pipelines</span> and implementing advanced analytics solutions while collaborating with talented professionals in a dynamic environment.
        </p>
      </div>
    </section>

    {/* Experience Section */}
    <section className="box-glow p-6 md:p-8 bg-cyan-600 bg-opacity-90 rounded-xl shadow-lg md:max-w-sm">
      <h3 className="text-xl font-extrabold mb-3 text-teal-50 text-center underline glow">
        <span className="text-red-600 text-3xl">M</span>y Experience
      </h3>
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 text-center">
        {/* SEO Freelancer Experience */}
        <div className="border-b md:border-none md:w-1/2 pb-6 md:pr-4">
          <p className="text-md font-semibold text-teal-50 mb-2 tracking-wide">
            SEO Freelancer
          </p>
          <p className="text-sm font-semibold text-white mb-3 italic">
            <span className="text-black">Freelance</span> | 2020 - 2023
          </p>
        </div>
        <div className="border-b md:border-none md:w-1/2 pb-6 md:pl-4">
          <p className="text-md font-semibold text-teal-50 mb-2 tracking-wide">
            Data Engineer (<span className="text-black">Intern</span>)
          </p>
          <p className="text-sm font-semibold text-white mb-3 italic">Samba Bank | Sep 2024</p>
        </div>
      </div>
    </section>
  </div>
);

export default Objective;
