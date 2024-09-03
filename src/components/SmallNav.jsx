import { motion } from "framer-motion";
import { IoBuild } from "react-icons/io5";
import { PiFolderStarBold } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { FaChevronUp } from "react-icons/fa";

function SmallNav({ aboutRef, projectsRef, skillsRef, contactRef, topNavRef }) {
  return (
    <nav className="fixed bottom-0 w-full md:right-5 md:top-1/3 md:w-auto">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex bg-slate-300/75 md:bg-transparent w-full">
          <ul className="flex md:flex-col justify-center gap-8 mx-4 my-4 w-full">
            <li className="flex justify-center hover:scale-110">
              <button
                onClick={() => {
                  topNavRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex flex-col items-center"
              >
                <span
                  className="tooltip tooltip-top md:tooltip-bottom"
                  data-tip="Go to top"
                >
                  <FaChevronUp size={"2rem"} />
                </span>
                <span className="font-bold">Top</span>
              </button>
            </li>

            <li className="flex justify-center hover:scale-110">
              <button
                onClick={() => {
                  aboutRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex flex-col items-center"
              >
                <span
                  className="tooltip tooltip-top md:tooltip-bottom"
                  data-tip="About"
                >
                  <IoIosContact size={"2rem"} />
                </span>
                <span className="font-bold">About</span>
              </button>
            </li>
            <li className="flex justify-center hover:scale-110">
              <button
                onClick={() => {
                  projectsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex flex-col items-center"
              >
                <span
                  className="tooltip tooltip-top md:tooltip-bottom"
                  data-tip="Projects"
                >
                  <PiFolderStarBold size={"2rem"} />
                </span>
                <span className="font-bold">Projects</span>
              </button>
            </li>
            <li className="flex justify-center hover:scale-110">
              <button
                onClick={() => {
                  skillsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex flex-col items-center"
              >
                <span
                  className="tooltip tooltip-top md:tooltip-bottom"
                  data-tip="Skills"
                >
                  <IoBuild size={"2rem"} />
                </span>
                <span className="font-bold">Skills</span>
              </button>
            </li>
            <li className="flex justify-center hover:scale-110">
              <button
                onClick={() => {
                  contactRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex flex-col items-center"
              >
                <span
                  className="tooltip tooltip-top md:tooltip-bottom"
                  data-tip="Contact"
                >
                  <SiMinutemailer size={"2rem"} />
                </span>
                <span className="font-bold">Contact</span>
              </button>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}

export default SmallNav;
