import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { sharedText } from './assets/shared-text';

import { useEffect, useRef, useState } from 'react';
import SmallNav from './components/SmallNav';

import { motion, AnimatePresence } from 'framer-motion';

function App() {

  const aboutRef= useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  const containerRef=useRef(null);

  const [isVisible, setIsVisible ] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    }

    const current = containerRef.current;

    const observer = new IntersectionObserver(callbackFunction, options);
    if (current) observer.observe(current);

    return () => {
      if(current) observer.unobserve(current);
    }
  }, [containerRef])

  return (
    <div>
        
        <Navbar  aboutRef={aboutRef} projectsRef={projectsRef} skillsRef={skillsRef} contactRef={contactRef} />
        <div ref={containerRef}></div>
        <AnimatePresence>
           {!isVisible &&
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition = {{duration: 0.2}}>
              <SmallNav aboutRef={aboutRef} projectsRef={projectsRef} skillsRef={skillsRef} contactRef={contactRef}/>
            </motion.div>
          }
        </AnimatePresence>

        <div  className='h-96 bg-orange-400'></div>
        <div className='h-96 bg-cyan-600'>{isVisible ? "IN VIEWPORT": "NOT IN VIEWPORT"}</div>
        <About aboutRef={aboutRef} title="About me" bodyText={sharedText.aboutMe.body} />
        <Projects projectsRef={projectsRef} title="Projects" projects={sharedText.projects} />
        <Skills skillsRef={skillsRef} title="Skills"/>
        <About aboutRef={contactRef} title="Contact"/>
        <div className='h-96 bg-cyan-600'>

        </div>
      
    </div>
  )
}

export default App
