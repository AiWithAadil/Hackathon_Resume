const Projects = () => (
  <div className="box-glow p-6 md:p-8 bg-gradient-to-r from-black to-gray-900 rounded-xl shadow-lg w-11/12 md:w-3/4 mx-auto mt-6">
    <h3 className="text-4xl font-extrabold mb-8 text-teal-50 text-center underline decoration-wavy glow">
      Projects
    </h3>
    <div className="space-y-8 text-center">
      <div className="border-b pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
        <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
          Netflix Data Cleaning & Analysis Pipeline
        </p>
        <p className="text-lg text-gray-400 mb-3 italic">
          <span className="glow text-teal-400">Saylani Mass IT Training Program</span> | 2024
        </p>
        <p className="text-md text-gray-400">
          <strong>Overview:</strong> A comprehensive pipeline for cleaning and analyzing Netflix data.<a href="https://github.com/AiWithAadil/Data_Engineering_Projects/tree/main/Netflix_ETL_And_EDA" className="glow text-teal-400">LINK</a>
        </p>
      </div>
      <div className="border-b pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
        <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
          Global Bank ETL Data Pipeline
        </p>
        <p className="text-lg text-gray-400 mb-3 italic">
          <span className="glow text-teal-400">Saylani Mass IT Training Program</span> | 2024
        </p>
        <p className="text-md text-gray-400">
          <strong>Overview:</strong> An ETL pipeline for processing transactional data for a global bank.<a href="https://github.com/AiWithAadil/Data_Engineering_Projects/tree/main/ETL-Global-Economic" className="glow text-teal-400">LINK</a>
        </p>
      </div>
      <div className="border-b pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
        <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
        Real-Time Data Engineering Project
        </p>
        <p className="text-lg text-gray-400 mb-3 italic">
          <span className="glow text-teal-400">Saylani Mass IT Training Program</span> | 2024
        </p>
        <p className="text-md text-gray-400">
          <strong>Overview:</strong> This project involves simulating a real-time stock market application, where stock market data is ingested in real-time, processed using Apache Kafka,.<a href="https://github.com/AiWithAadil/Stock_Market_RealTime_Project_DataEngineering" className="glow text-teal-400">LINK</a>
        </p>
      </div>
      <div className="pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
        <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
          Portfolio
        </p>
        <p className="text-lg text-gray-400 mb-3 italic">
          <span className="glow text-teal-400">Governor House GenAI</span> | 2024
        </p>
        <p className="text-md text-gray-400">
          <strong>Overview:</strong>This Portfolio Make using Next.js with some Tailwindcss.<a href="https://my-port-folio-rosy-seven.vercel.app/" className="glow text-teal-400">LINK</a>
        </p>
      </div>
    </div>
  </div>
);

export default Projects;
