import './Navbar.css';

function Navbar({aboutRef, projectsRef, skillsRef, contactRef}) {
    return (
        <>
            <nav className="flex m-12">
                <div className="hover:scale-110 transition-transform">
                    <img className="block mx-auto h-24 rounded-full" src="https://res.cloudinary.com/dopr8pnvl/image/upload/v1721162075/synth.jpg"></img>
                </div>
                <div className="flex flex-col my-4 mx-4">
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