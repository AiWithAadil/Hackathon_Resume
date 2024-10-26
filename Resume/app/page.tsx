import React from 'react';
import Header from "./components/Header";
import Objective from './components/ObjExp';
import EducationAndSkills from './components/EduSkill';
import Projects from './components/Projects';

const Page = () => {
  return (
    <div className=' max-w-6xl mx-auto bg-white'>
      <Header />
      <Objective />
      <EducationAndSkills />
      <Projects />
    </div>
  );
};

export default Page;
