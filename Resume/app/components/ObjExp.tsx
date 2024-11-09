import React from 'react';

const Objective = () => (
  <div className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto mt-6 bg-[#EEEEEE] rounded-md shadow-lg">
    {/* Objective Section */}
    <section className="p-6 md:p-8 bg-[#222831] rounded-xl shadow-lg flex-1">
      <h3 className="text-xl font-extrabold mb-3 text-[#EEEEEE] text-center underline">
        <span className="text-[#00ADB5] text-3xl">O</span>bjective
      </h3>
      <div className="space-y-4 text-center">
        <p className="text-sm text-[#EEEEEE] mb-3 italic">
          My objective is to leverage my knowledge and skills in <span className="text-[#00ADB5]">data engineering</span> and Generative AI to contribute to innovative projects that drive data-driven decision-making and enhance operational efficiencies. I aim to continuously expand my expertise in developing scalable <span className="text-[#00ADB5]">data pipelines</span> and implementing advanced analytics solutions while collaborating with talented professionals in a dynamic environment.
        </p>
      </div>
    </section>

    {/* Experience Section */}
    <section className="p-6 md:p-8 bg-[#222831] rounded-xl shadow-lg flex-1">
      <h3 className="text-xl font-extrabold mb-3 text-[#EEEEEE] text-center underline">
        <span className="text-[#00ADB5] text-3xl">M</span>y Experience
      </h3>
      <div className="space-y-6">
        {/* SEO Freelancer Experience */}
        <div className="border-b border-[#00ADB5] pb-4">
          <p className="text-md font-semibold text-[#EEEEEE] mb-1 text-center md:text-left">
            SEO Freelancer
          </p>
          <p className="text-sm font-semibold text-[#EEEEEE] italic text-center md:text-left">
            <span className="text-[#00ADB5]">Freelance</span> | 2020 - 2023
          </p>
        </div>

        {/* Data Engineer Intern Experience */}
        <div className="border-b border-[#00ADB5] pb-4">
          <p className="text-md font-semibold text-[#EEEEEE] mb-1 text-center md:text-left">
            Data Engineer (<span className="text-[#00ADB5]">Intern</span>)
          </p>
          <p className="text-sm font-semibold text-[#EEEEEE] italic text-center md:text-left">
            Samba Bank | Sep 2024
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Objective;
