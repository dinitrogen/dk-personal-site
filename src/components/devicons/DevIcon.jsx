import AngularIcon from "./AngularIcon";
import CSharpIcon from "./CSharpIcon";
import CssIcon from "./CssIcon";
import DotNetIcon from "./DotNetIcon";
import ExpressIcon from "./ExpressIcon";
import GithubIcon from "./GithubIcon";
import GitIcon from "./GitIcon";
import HtmlIcon from "./HtmlIcon";
import JenkinsIcon from "./JenkinsIcon";
import JestIcon from "./JestIcon";
import JsIcon from "./JsIcon";
import MongoIcon from "./MongoIcon";
import NodeIcon from "./NodeIcon";
import ReactIcon from "./ReactIcon";
import SqlIcon from "./SqlIcon";
import TailwindIcon from "./TailwindIcon";
import TypescriptIcon from "./TypescriptIcon";
import WebpackIcon from "./WebpackIcon";

function DevIcon({ name, width }) {
  switch (name) {
    case "Angular":
      return <AngularIcon width={width} />;
    case "CSS":
      return <CssIcon width={width} />;
    case "Express":
      return <ExpressIcon width={width} />;
    case "Github":
      return <GithubIcon width={width} />;
    case "Git":
      return <GitIcon width={width} />;
    case "HTML":
      return <HtmlIcon width={width} />;
    case "Jenkins":
      return <JenkinsIcon width={width} />;
    case "Jest":
      return <JestIcon width={width} />;
    case "JavaScript":
      return <JsIcon width={width} />;
    case "MongoDB":
      return <MongoIcon width={width} />;
    case "NodeJS":
      return <NodeIcon width={width} />;
    case "React":
      return <ReactIcon width={width} />;
    case "SQL":
      return <SqlIcon width={width} />;
    case "Tailwind":
      return <TailwindIcon width={width} />;
    case "TypeScript":
      return <TypescriptIcon width={width} />;
    case "Webpack":
      return <WebpackIcon width={width} />;
    case "C#":
      return <CSharpIcon width={width} />;
    case ".NET":
      return <DotNetIcon width={width} />;
    default:
      return null;
  }
}

export default DevIcon;
