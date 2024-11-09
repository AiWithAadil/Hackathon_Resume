import React from 'react';

const EducationAndSkills = () => {
  return (
    <section className='bg-[#222831] text-[#EEEEEE] mt-6 px-6 py-8 max-w-2xl mx-auto rounded-md shadow-lg'>
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-center border-b-2 border-[#00ADB5] pb-2">Education <span className='text-[#00ADB5] text-3xl'>&</span> Skills</h2>
      
      {/* Education Section */}
      <div className="mb-6">
        <h3 className="text-md font-bold mb-2 text-[#00ADB5]">Education</h3>
        <ul className="list-disc list-inside text-sm md:text-base">
          <li>Bachelor's in Computer Science – ABC University (Year)</li>
          <li>Data Engineering Specialization – XYZ Institute (Year)</li>
        </ul>
      </div>

      {/* Skills Section */}
      <div>
        <h3 className="text-md font-bold mb-2 text-[#00ADB5]">Skills</h3>
        <ul className="flex flex-wrap gap-2 text-sm md:text-base">
          <li className="bg-[#00ADB5] text-[#222831] rounded-md px-2 py-1">Python</li>
          <li className="bg-[#00ADB5] text-[#222831] rounded-md px-2 py-1">SQL</li>
          <li className="bg-[#00ADB5] text-[#222831] rounded-md px-2 py-1">Docker</li>
          <li className="bg-[#00ADB5] text-[#222831] rounded-md px-2 py-1">Kafka</li>
          <li className="bg-[#00ADB5] text-[#222831] rounded-md px-2 py-1">Snowflake</li>
          <li className="bg-[#00ADB5] text-[#222831] rounded-md px-2 py-1">Airflow</li>
          <li className="bg-[#00ADB5] text-[#222831] rounded-md px-2 py-1">AWS</li>
          <li className="bg-[#00ADB5] text-[#222831] rounded-md px-2 py-1">Data Warehousing</li>
          <li className="bg-[#00ADB5] text-[#222831] rounded-md px-2 py-1">Cloud Integration</li>
          <li className="bg-[#00ADB5] text-[#222831] rounded-md px-2 py-1">GenAI</li>
        </ul>
      </div>
    </section>
  );
};

export default EducationAndSkills;
