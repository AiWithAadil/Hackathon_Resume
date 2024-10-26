import React from 'react';

const Projects = () => (
  <div className="border-dotted bg-cyan-600 rounded-md shadow-lg w-11/12 md:max-w-2xl mb-10 mx-auto mt-6 p-6 md:p-8">
    <h3 className="text-xl font-extrabold mb-8 text-teal-50 text-center underline glow">
      <span className='text-red-600 text-3xl'>P</span>rojects
    </h3>
    <div className="space-y-8 text-center">
      <div className="border-b pb-2">
        <p className="text-md font-semibold text-white tracking-wide">
          Netflix Data Cleaning & Analysis Pipeline
        </p>
        <p className="text-sm text-white mb-3 italic">
          <span className="glow text-black">Saylani Mass IT Training Program</span> | 2024
        </p>
        <p className="text-sm text-white">
          <strong>Overview:</strong> A comprehensive pipeline for cleaning and analyzing Netflix data. 
          <a href="https://github.com/AiWithAadil/Data_Engineering_Projects/tree/main/Netflix_ETL_And_EDA" className="text-red-600"> LINK</a>
        </p>
      </div>

      <div className="border-b pb-2">
        <p className="text-md font-semibold text-white">
          Global Bank ETL Data Pipeline
        </p>
        <p className="text-sm text-white italic">
          <span className="glow text-black">Saylani Mass IT Training Program</span> | 2024
        </p>
        <p className="text-md text-white">
          <strong>Overview:</strong> An ETL pipeline for processing transactional data for a global bank. 
          <a href="https://github.com/AiWithAadil/Data_Engineering_Projects/tree/main/ETL-Global-Economic" className="text-red-600"> LINK</a>
        </p>
      </div>

      <div className="border-b pb-2">
        <p className="text-md font-semibold text-white">
          Real-Time Data Engineering Project
        </p>
        <p className="text-sm text-white">
          <span className="glow text-black">Saylani Mass IT Training Program</span> | 2024
        </p>
        <p className="text-sm text-white">
          <strong>Overview:</strong> This project involves simulating a real-time stock market application, where stock market data is ingested in real-time, processed using Apache Kafka. 
          <a href="https://github.com/AiWithAadil/Stock_Market_RealTime_Project_DataEngineering" className="text-red-600"> LINK</a>
        </p>
      </div>

      <div className="pb-2">
        <p className="text-md font-semibold text-white">
          Portfolio
        </p>
        <p className="text-sm text-white">
          <span className="text-black">Governor House GenAI</span> | 2024
        </p>
        <p className="text-md text-white">
          <strong>Overview:</strong> This portfolio is made using Next.js with some Tailwind CSS. 
          <a href="https://my-port-folio-rosy-seven.vercel.app/" className="text-red-600"> LINK</a>
        </p>
      </div>
    </div>
  </div>
);

export default Projects;
