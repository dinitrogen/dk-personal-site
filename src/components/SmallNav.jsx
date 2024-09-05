import { motion } from "framer-motion";
import { IoBuild } from "react-icons/io5";
import { PiFolderStarBold } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { FaChevronUp } from "react-icons/fa";

function SmallNav({ aboutRef, projectsRef, skillsRef, contactRef, topNavRef }) {
  return (
    <nav className="fixed bottom-0 w-full md:right-3 md:top-0 md:w-auto">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex bg-slate-300/75 md:bg-transparent w-full">
          <ul className="flex md:flex-col justify-center gap-8 mx-4 my-4 w-full">
            <li className="flex justify-center hover:drop-shadow-md hover:scale-110">
              <button
                onClick={() => {
                  topNavRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex flex-col items-center"
              >
                <FaChevronUp size={"2rem"} className={"text-primary"} />

                <span className="font-bold text-primary">Top</span>
              </button>
            </li>

            <li className="flex justify-center hover:drop-shadow-md hover:scale-110">
              <button
                onClick={() => {
                  aboutRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex flex-col items-center"
              >
                <IoIosContact size={"2rem"} className={"text-primary"} />

                <span className="font-bold text-primary">About</span>
              </button>
            </li>
            <li className="flex justify-center hover:drop-shadow-md hover:scale-110">
              <button
                onClick={() => {
                  projectsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex flex-col items-center"
              >
                <PiFolderStarBold size={"2rem"} className={"text-primary"} />

                <span className="font-bold text-primary">Projects</span>
              </button>
            </li>
            <li className="flex justify-center hover:drop-shadow-md hover:scale-110">
              <button
                onClick={() => {
                  skillsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex flex-col items-center"
              >
                <IoBuild size={"2rem"} className={"text-primary"} />

                <span className="font-bold text-primary">Skills</span>
              </button>
            </li>
            <li className="flex justify-center hover:drop-shadow-md hover:scale-110">
              <button
                onClick={() => {
                  contactRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex flex-col items-center"
              >
                <SiMinutemailer size={"2rem"} className={"text-primary"} />

                <span className="font-bold text-primary">Contact</span>
              </button>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}

export default SmallNav;
