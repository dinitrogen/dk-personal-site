import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footbar flex flex-col justify-end gap-10 items-center before:bg-gradient-to-r from-primary to-secondary h-96">
      <div className="z-10">
        <p className="text-lg font-medium z-20 pb-2 text-white">Find me on:</p>
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
      <aside className="z-10">
        <p className="text-md font-medium z-20 mb-28 md:mb-12 text-white">
          Copyright © {new Date().getFullYear()} - Don Knobloch
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
