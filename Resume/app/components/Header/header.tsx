import Image from 'next/image';
import './header.css'; // Ensure to import your CSS file

const Header = () => (
  <header className="box-glow flex flex-col md:flex-row items-center rounded-lg p-6 text-teal-900 bg-gradient-to-r from-black to-gray-900 font-semibold w-11/12 md:w-4/6 mx-auto">

    {/* Center: Profile Image and Name */}
    <div className="flex flex-col items-center mx-6 glow-img mt-4 ml-28 ">
      <Image 
        src="/adil3.jpg"  
        alt="Profile Picture of Syed Muhammad Adil" 
        width={250} 
        height={250} 
        className="rounded-full glow-img mb-4 border-4 border-highlight" 
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-2 underline">Syed Muhammad Adil</h1>
        <h2 className="text-md text-teal-50 mb-6 mt-2">
          <span className=" text-teal-400">Data Engineering</span> Enthusiast | 
          <span className=""> Docker</span>, 
          <span className=""> Kafka</span>, 
          <span className="text-teal-400"> Snowflake</span>, 
          <span className=""> Airflow</span> | <br />
          <span className="">DWH</span>, 
          <span className=""> AWS</span> & 
          <span className=""> Cloud Integration</span> | 
          <span className="text-teal-400"> GenAI Learning</span> | 
          <span className=""> AI</span> | 
          <span className=""> Data Engineer</span>
        </h2>
      </div>
    </div>
  </header>
);

export default Header;
