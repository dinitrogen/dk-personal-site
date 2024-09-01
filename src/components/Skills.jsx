import MotionDiv from "./MotionDiv";
import HtmlIcon from './devicons/HtmlIcon';
import CssIcon from "./devicons/CssIcon";
import JsIcon from "./devicons/JsIcon";
import ReactIcon from "./devicons/ReactIcon";
import AngularIcon from "./devicons/AngularIcon";
import NodeIcon from "./devicons/NodeIcon";
import ExpressIcon from "./devicons/ExpressIcon";
import GitIcon from "./devicons/GitIcon";
import GithubIcon from "./devicons/GithubIcon";
import JenkinsIcon from "./devicons/JenkinsIcon";
import JestIcon from "./devicons/JestIcon";
import MongoIcon from "./devicons/MongoIcon";
import SqlIcon from "./devicons/SqlIcon";
import TypescriptIcon from "./devicons/TypescriptIcon";
import WebpackIcon from "./devicons/WebpackIcon";

function Skills({skillsRef, title}) {

    return (
        
        <section>
            <div ref={skillsRef} className="mx-12 pt-24">
                <MotionDiv delay={0.3}>
                    <h2 className='text-2xl font-medium'>{title}</h2>
                </MotionDiv>
            </div>

            <MotionDiv delay={0.5}>
                <div className="flex justify-center flex-wrap gap-8 my-12">
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="HTML">   
                        <HtmlIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="CSS">
                        <CssIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="JavaScript">
                        <JsIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="React">
                        <ReactIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="Angular">
                        <AngularIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="NodeJS">
                        <NodeIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="Express">
                        <ExpressIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="Git">
                        <GitIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="GitHub">
                        <GithubIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="Jenkins">
                        <JenkinsIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="Jest">
                        <JestIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="TypeScript">
                        <TypescriptIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="MongoDB">
                        <MongoIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="SQL">
                        <SqlIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="Webpack">
                        <WebpackIcon />
                    </div>             
                </div>
            </MotionDiv>
            <div className='h-96'></div>
        </section>
    )
}

export default Skills;