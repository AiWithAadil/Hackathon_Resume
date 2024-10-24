// Ensure styles are included

const Education = () => (
  <div className="box-glow p-6 md:p-8 bg-gradient-to-r from-black to-gray-900 rounded-xl shadow-lg w-11/12 md:w-3/4 mx-auto mt-6">
    <h3 className="text-4xl font-extrabold mb-8 text-teal-50 text-center underline decoration-wavy glow">
      Education
    </h3>
    <div className="space-y-8 text-center">
      <div className="border-b pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
        <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
          Saylani Mass IT Training Program
        </p>
        <p className="text-lg text-gray-400 mb-3 italic"><span className="glow text-teal-400">Data Engineering</span> | 2024</p>
      </div>
      <div className="border-b pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
        <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
          Governor House
        </p>
        <p className="text-lg text-gray-400 mb-3 italic"><span className="glow text-teal-400">GenAI Studies</span> | 2024</p>
      </div>
      <div className="pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
        <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
          Government Commerce College
        </p>
        <p className="text-lg text-gray-400 mb-3 italic"><span className="glow text-teal-400">Part 2</span> | 2022</p>
      </div>
    </div>
  </div>
);

export default Education;

