import "./Navbar.css";

function Navbar({ topNavRef, aboutRef, projectsRef, skillsRef, contactRef }) {
  return (
    <>
      <div className="-z-20 bar flex justify-center py-14 before:bg-gradient-to-r from-secondary to-primary">
        <nav ref={topNavRef} className="md:flex">
          <div className="flex justify-center">
            <div className="md:w-48 md:h-auto md:translate-x-14 z-20">
              <img
                className="w-48 rounded-full drop-shadow-xl"
                src="https://res.cloudinary.com/dopr8pnvl/image/upload/v1725055871/da4milsmr0c6ehomo2fd.jpg"
              ></img>
            </div>
          </div>
          <div className="flex flex-col my-8 mx-16 items-center md:items-start md:border md:rounded-xl md:shadow-xl bg-white md:px-16 z-10 md:-translate-x-14 md:py-4">
            <h1 className="text-5xl font-bold px-4">Don Knobloch</h1>
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
      </div>
    </>
  );
}

export default Navbar;
