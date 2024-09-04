import "./Navbar.css";

function Navbar({ topNavRef, aboutRef, projectsRef, skillsRef, contactRef }) {
  return (
    <>
      <nav ref={topNavRef} className="md:flex my-16 mx-60">
        <div className="flex justify-center md:justify-start">
          <img
            className="w-48 rounded-full drop-shadow-lg"
            src="https://res.cloudinary.com/dopr8pnvl/image/upload/v1725055871/da4milsmr0c6ehomo2fd.jpg"
          ></img>
        </div>
        <div className="flex flex-col my-8 mx-16 items-center md:items-start">
          <h1 className="text-5xl font-bold z-20">Don Knobloch</h1>
          <ul className="flex gap-8 mx-4 mt-8">
            <li className="hover:scale-110">
              <button
                onClick={() => {
                  aboutRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="nav-link text-xl font-semibold"
              >
                About
              </button>
            </li>
            <li className="hover:scale-110">
              <button
                onClick={() => {
                  projectsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="nav-link text-xl font-semibold"
              >
                Projects
              </button>
            </li>
            <li className="hover:scale-110">
              <button
                onClick={() => {
                  skillsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="nav-link text-xl font-semibold"
              >
                Skills
              </button>
            </li>
            <li className="hover:scale-110">
              <button
                onClick={() => {
                  contactRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="nav-link text-xl font-semibold"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
