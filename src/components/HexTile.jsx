import MotionDiv from "./MotionDiv";
import "./HexTile.scss";

import HtmlIcon from "./devicons/HtmlIcon";
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
import TailwindIcon from "./devicons/TailwindIcon";

function HexTile({ skillsRef, title }) {
  return (
    <section ref={skillsRef} className="md:container mx-auto">
      <div className="mx-36 pt-24">
        <MotionDiv delay={0.3}>
          <h2 className="text-2xl font-medium">{title}</h2>
        </MotionDiv>
      </div>
      <div>
        <MotionDiv delay={0.4}>
          <p className="text-xl font-normal w-2/3 mx-auto my-8">
            I continually strive to expand my development skills and refine my
            existing skills through practice. Learning a new programming
            language or technology is like adding a new tool to the toolbox, and
            with the right tools any project can be tackled. Here are some of
            tools I work with the most.
          </p>
        </MotionDiv>
      </div>

      <MotionDiv delay={0.5}>
        <div className="md:w-2/3 mx-auto my-12">
          <ul className="list">
            <li className="list-item tooltip" data-tip="HTML">
              <div className="item-inside bg-primary/20 hover:scale-110 hover:bg-primary/40 transition-transform">
                <HtmlIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="CSS">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <CssIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="JavaScript">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <JsIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="React">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <ReactIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="Angular">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <AngularIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="NodeJS">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <NodeIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="Express">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <ExpressIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="Git">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <GitIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="Github">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <GithubIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="Jenkins">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <JenkinsIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="Jest">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <JestIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="MongoDB">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <MongoIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="SQL">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <SqlIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="TypeScript">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <TypescriptIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="Webpack">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <WebpackIcon width="w-full" />
              </div>
            </li>
            <li className="list-item tooltip" data-tip="TailwindCSS">
              <div className="item-inside bg-primary/20 hover:scale-110 transition-transform">
                <TailwindIcon width="w-full" />
              </div>
            </li>
          </ul>
        </div>
      </MotionDiv>
    </section>
  );
}

export default HexTile;
