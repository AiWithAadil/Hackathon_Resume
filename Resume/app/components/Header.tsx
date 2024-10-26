import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='border-dotted bg-cyan-600 text-center max-w-2xl mx-auto h-auto mt-5 rounded-md py-8 px-6'>
      <div className='flex flex-col md:flex-row items-center'>
        <div className="ml-4 mb-4 md:mb-0">
          <Image
            src="/adil4.jpg"
            alt="Profile Picture of Syed Muhammad Adil"
            width={140}
            height={150}
            className="rounded-full border-4 text-black shadow-md"
          />
        </div>
        <div className='text-left md:ml-8'>
          <h1 className="text-md md:text-2xl font-bold underline text-white mb-2"><span className="text-red-600 text-3xl">S</span>yed <span className="text-red-600 text-3xl">M</span>uhammad <span className="text-red-600 text-3xl">A</span>dil</h1>
          <h4 className="text-sm md:text-sm text-teal-50 mb-6 leading-relaxed">
            <span className="text-black">Data Engineering</span> Enthusiast |
            <span> Docker</span>,
            <span> Kafka</span>,
            <span className="text-black"> Snowflake</span>,
            <span> Airflow</span> | <br />
            <span>DWH</span>,
            <span> AWS</span> &amp;
            <span> Cloud Integration</span> |
            <span className="text-black"> GenAI Learning</span> |
            <span> AI</span> |
            <span> Data Engineer</span>
          </h4>
          <div className="mt-6">
            <p className="text-sm text-gray-400 italic flex flex-col md:flex-row justify-between">
              <a href="mailto:smaadil688@gmail.com" className="hover:underline text-black">📧 smaadil688@gmail.com</a>
              <a href="https://www.linkedin.com/in/syed-muhammad-adil-ahmed-3b96b2333/" target="_blank" rel="noopener noreferrer" className="hover:underline text-black mt-2 md:mt-0 mr-24">
                🌐 linkedin
              </a>
            </p>
            <p className="text-sm text-gray-400 italic flex flex-col md:flex-row justify-between mt-3">
              <span className="text-black">📞 +92 300 1234567</span>
              <a href="https://github.com/AiWithAadil" target="_blank" rel="noopener noreferrer" className="hover:underline text-black mt-2 md:mt-0">
                🐙 github.com/AiWithAadil
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
