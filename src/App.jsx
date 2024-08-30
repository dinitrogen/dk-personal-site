import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { sharedText } from './assets/shared-text';

import { useRef } from 'react';

function App() {

  const aboutRef= useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  return (
    <div>
      
        <Navbar aboutRef={aboutRef} projectsRef={projectsRef} skillsRef={skillsRef} contactRef={contactRef} />
        <div className='h-96 bg-cyan-600'></div>
        <div className='h-96 bg-cyan-600'></div>
        <About aboutRef={aboutRef} title="About me" bodyText={sharedText.aboutMe.body} />
        <Projects projectsRef={projectsRef} title="Projects" projects={sharedText.projects} />

        <Skills skillsRef={skillsRef} title="Skills"/>
        <About aboutRef={contactRef} title="Contact"/>
        
        

      
    </div>
  )
}

export default App
