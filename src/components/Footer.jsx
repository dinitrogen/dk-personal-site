import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer footer-center bg-primary/75 text-base-content rounded p-10">
      <nav>
        <p className="text-lg">Find me on:</p>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/donald-knobloch">
            <FaLinkedin size={"2rem"} />
          </a>
          <a href="https://github.com/dinitrogen">
            <FaGithub size={"2rem"} />
          </a>
        </div>
      </nav>
      <aside className="mb-16 md:mb-0">
        <p className="text-lg">
          Copyright © {new Date().getFullYear()} - Don Knobloch
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
