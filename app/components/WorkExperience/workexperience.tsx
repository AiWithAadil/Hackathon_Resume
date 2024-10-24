const WorkExperience = () => (
  <div className="box-glow p-6 md:p-8 bg-gradient-to-r from-black to-gray-900 rounded-xl shadow-lg w-11/12 md:w-3/4 mx-auto mt-6">
    <h3 className="text-4xl font-extrabold mb-8  text-teal-50 text-center underline decoration-wavy glow">
      My Experience
    </h3>
    <div className="space-y-8 text-center">
      <div className="border-b pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
        <p className="text-2xl font-semibold  text-teal-50 mb-2 tracking-wide">
          Data Engineer (Intern)
        </p>
        <p className="text-lg text-gray-400 mb-3 italic">Samba Bank | Sep 2024</p>
        <p className="text-gray-400">
          Managing Data Engineering projects, ensuring timely delivery and
          <span className="text-teal-400 font-medium glow"> quality</span> control.
        </p>
      </div>
      <div className="border-b pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
        <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
          SEO Freelancer
        </p>
        <p className="text-lg text-gray-400 mb-3 italic">Freelance | 2020 - Present</p>
        <p className="text-gray-400">
          Specialized in
          <span className="text-teal-400 font-medium glow"> SEO strategies</span>, improving search
          rankings, and driving organic traffic for various clients.
        </p>
      </div>
    </div>
  </div>
);

export default WorkExperience;
