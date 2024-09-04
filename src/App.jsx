import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import { sharedText } from "./assets/shared-text";

import { useEffect, useRef, useState } from "react";
import SmallNav from "./components/SmallNav";

import { motion, AnimatePresence } from "framer-motion";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const topNavRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  const navTriggerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const current = navTriggerRef.current;

    const observer = new IntersectionObserver(callbackFunction, options);
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [navTriggerRef]);

  return (
    <div>
      <Navbar
        topNavRef={topNavRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <div ref={navTriggerRef} className="-translate-y-12"></div>

      <About
        aboutRef={aboutRef}
        title="About me"
        bodyText={sharedText.aboutMe.body}
      />
      <Projects
        projectsRef={projectsRef}
        title="Projects"
        projects={sharedText.projects}
      />
      <Skills skillsRef={skillsRef} title="Skills" />
      <Contact contactRef={contactRef} title="Contact" />
      <Footer />
      <AnimatePresence>
        {!isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <SmallNav
              topNavRef={topNavRef}
              aboutRef={aboutRef}
              projectsRef={projectsRef}
              skillsRef={skillsRef}
              contactRef={contactRef}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
