import Header from './components/Header/header';
import About from './components/About/about'
import Contact from './components/ContactInfo/contact'
import WorkExperience from './components/WorkExperience/workexperience';
import Education from './components/OtherSections/Education';
import Skills from './components/OtherSections/Skills';
import Projects from './components/OtherSections/Projects';  // Add Projects import here

export default function Home() {
  return (
    
    <div className="p-8 md:p-12 bg-transparent rounded-2xl shadow-2xl w-11/12 md:w-3/4 lg:w-2/3 box-glow">
      <div className='text-center mb-8 text-5xl underline text-white glow'>
      <h1>Resume</h1>
      </div>
      <Header />
      <Contact />
      <About />
      <WorkExperience/>
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}
