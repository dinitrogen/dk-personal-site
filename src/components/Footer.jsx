import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="footbar flex flex-col justify-end gap-10 items-center before:bg-gradient-to-r from-primary to-secondary h-96">
      <div className="z-10">
        <p className="text-lg font-medium z-10 pb-2 text-white">Find me on:</p>
        <div className="grid grid-flow-col gap-6">
          <a
            className="text-white"
            href="https://www.linkedin.com/in/donald-knobloch"
          >
            <FaLinkedin size={"2rem"} />
          </a>
          <a className="text-white" href="https://github.com/dinitrogen">
            <FaGithub size={"2rem"} />
          </a>
        </div>
      </div>
      <aside className="flex flex-col items-center gap-2 z-10 text-md font-medium text-white mb-28 md:mb-12">
        <p>Copyright © {new Date().getFullYear()} - Don Knobloch</p>
        <p>
          Built with&nbsp;&nbsp;
          <span className="tooltip tooltip-top" data-tip="React">
            <FaReact color="#61DAFB" size={"1.75rem"} className={"inline"} />
          </span>{" "}
          ,{" "}
          <span className="tooltip tooltip-top" data-tip="Tailwind">
            <RiTailwindCssFill
              color="#38bdf8"
              size={"1.75rem"}
              className={"inline"}
            />
          </span>{" "}
          , and{" "}
          <span className="text-lg tooltip tooltip-top" data-tip="Love!">
            &#129505;
          </span>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
