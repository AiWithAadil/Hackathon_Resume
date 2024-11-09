import React from 'react';

const Projects = () => (
  <div className="bg-[#222831] rounded-md shadow-lg w-11/12 md:max-w-2xl mb-10 mx-auto mt-6 p-6 md:p-8">
    <h3 className="text-xl font-extrabold mb-8 text-[#EEEEEE] text-center underline">
      <span className='text-[#00ADB5] text-3xl'>P</span>rojects
    </h3>
    <div className="space-y-8 text-center">
      <div className="border-b border-[#393E46] pb-4">
        <p className="text-md font-semibold text-[#A6F6FF] tracking-wide">
          Netflix Data Cleaning & Analysis Pipeline
        </p>
        <p className="text-sm text-[#EEEEEE] mb-3 italic">
          <span className="text-[#00ADB5]">Saylani Mass IT Training Program</span> | 2024
        </p>
        <p className="text-sm text-[#EEEEEE]">
          <strong>Overview:</strong> A comprehensive pipeline for cleaning and analyzing Netflix data. 
          <a href="https://github.com/AiWithAadil/Data_Engineering_Projects/tree/main/Netflix_ETL_And_EDA" className="text-[#00ADB5] hover:underline"> LINK</a>
        </p>
      </div>

      <div className="border-b border-[#393E46] pb-4">
        <p className="text-md font-semibold text-[#A6F6FF]">
          Global Bank ETL Data Pipeline
        </p>
        <p className="text-sm text-[#EEEEEE] italic">
          <span className="text-[#00ADB5]">Saylani Mass IT Training Program</span> | 2024
        </p>
        <p className="text-sm text-[#EEEEEE]">
          <strong>Overview:</strong> An ETL pipeline for processing transactional data for a global bank. 
          <a href="https://github.com/AiWithAadil/Data_Engineering_Projects/tree/main/ETL-Global-Economic" className="text-[#00ADB5] hover:underline"> LINK</a>
        </p>
      </div>

      <div className="border-b border-[#393E46] pb-4">
        <p className="text-md font-semibold text-[#A6F6FF]">
          Real-Time Data Engineering Project
        </p>
        <p className="text-sm text-[#EEEEEE]">
          <span className="text-[#00ADB5]">Saylani Mass IT Training Program</span> | 2024
        </p>
        <p className="text-sm text-[#EEEEEE]">
          <strong>Overview:</strong> This project involves simulating a real-time stock market application, where stock market data is ingested in real-time, processed using Apache Kafka. 
          <a href="https://github.com/AiWithAadil/Stock_Market_RealTime_Project_DataEngineering" className="text-[#00ADB5] hover:underline"> LINK</a>
        </p>
      </div>

      <div className="pb-2">
        <p className="text-md font-semibold text-[#A6F6FF]">
          Portfolio
        </p>
        <p className="text-sm text-[#EEEEEE]">
          <span className="text-[#00ADB5]">Governor House</span> | Web Development Project
        </p>
        <p className="text-sm text-[#EEEEEE]">
          <strong>Overview:</strong> Designed and developed a responsive website for a government office.
        </p>
      </div>
    </div>
  </div>
);

export default Projects;
