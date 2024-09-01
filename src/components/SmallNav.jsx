import { motion } from "framer-motion";
import { IoBuild } from "react-icons/io5";
import { PiFolderStarBold } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";

function SmallNav({aboutRef, projectsRef, skillsRef, contactRef}) {
    return (
        
        <nav className="fixed bottom-0 md:top-0 w-full z-50">
            
            <motion.div
            initial = {{opacity: 0, y:-50}}
            animate = {{opacity: 1, y: 0}}
            transition = {{duration: 0.2}}
            >
                <div className="flex bg-slate-500/75 w-full">
                                    
                    <ul className="flex justify-center gap-8 mx-4 my-4 w-full">
                        <li className="hover:scale-110">
                            <button onClick={() => {
                                aboutRef.current?.scrollIntoView({
                                behavior: 'smooth' 
                                });
                            }} className="">
                                
                                <span className="hidden md:inline">About Me</span>
                                <span className="flex md:hidden tooltip tooltip-top" data-tip="About"><IoIosContact size={'2rem'} /></span>
                            </button>
                        </li >
                        <li className="hover:scale-110">
                            <button onClick={() => {
                                projectsRef.current?.scrollIntoView({
                                behavior: 'smooth' 
                                });
                            }} className="">
                                <span className="hidden md:inline">Projects</span>
                                <span className="flex md:hidden tooltip tooltip-top" data-tip="Projects"><PiFolderStarBold size={'2rem'} /></span>
                                
                                </button>
                        </li>
                        <li className="hover:scale-110">
                        <button onClick={() => {
                                skillsRef.current?.scrollIntoView({
                                behavior: 'smooth' 
                                });
                            }} className="">
                                <span className="hidden md:inline">Skills</span>
                                <span className="flex md:hidden tooltip tooltip-top" data-tip="Skills"><IoBuild size={'2rem'} /></span>
                            </button>
                        </li>
                        <li className="hover:scale-110"> 
                        <button onClick={() => {
                                contactRef.current?.scrollIntoView({
                                behavior: 'smooth' 
                                });
                            }} className="">
                                <span className="hidden md:inline">Contact</span>
                                <span className="flex md:hidden tooltip tooltip-top" data-tip="Contact"><SiMinutemailer size={'2rem'} /></span>
                                </button>
                        </li>
                    </ul>
                
                </div>
            </motion.div> 
        </nav>
        
    )
}

export default SmallNav