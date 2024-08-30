import './Navbar.css';

function Navbar({aboutRef, projectsRef, skillsRef, contactRef}) {
    return (
        <>
            <nav className="md:flex m-12">
                <div className="flex justify-center md:justify-start">
                    <img className="w-36 rounded-full" src="https://res.cloudinary.com/dopr8pnvl/image/upload/v1725055871/da4milsmr0c6ehomo2fd.jpg"></img>
                </div>
                <div className="flex flex-col my-4 mx-4 items-center md:items-start">
                    <h1 className="text-4xl">Don Knobloch</h1>
                    <ul className="flex gap-8 mx-4 mt-4">
                        <li className="hover:scale-110">
                            <button onClick={() => {
                                aboutRef.current?.scrollIntoView({
                                behavior: 'smooth' 
                                });
                            }} className="nav-link">About Me</button>
                        </li >
                        <li className="hover:scale-110">
                            <button onClick={() => {
                                projectsRef.current?.scrollIntoView({
                                behavior: 'smooth' 
                                });
                            }} className="nav-link">Projects</button>
                        </li>
                        <li className="hover:scale-110">
                        <button onClick={() => {
                                skillsRef.current?.scrollIntoView({
                                behavior: 'smooth' 
                                });
                            }} className="nav-link">Skills</button>
                        </li>
                        <li className="hover:scale-110"> 
                        <button onClick={() => {
                                contactRef.current?.scrollIntoView({
                                behavior: 'smooth' 
                                });
                            }} className="nav-link">Contact</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;