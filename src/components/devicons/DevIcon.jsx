import AngularIcon from "./AngularIcon"
import CssIcon from "./CssIcon"
import ExpressIcon from "./ExpressIcon"
import GithubIcon from "./GithubIcon"
import GitIcon from "./GitIcon"
import HtmlIcon from "./HtmlIcon"
import JenkinsIcon from "./JenkinsIcon"
import JestIcon from "./JestIcon"
import JsIcon from "./JsIcon"
import MongoIcon from "./MongoIcon"
import NodeIcon from "./NodeIcon"
import ReactIcon from "./ReactIcon"
import SqlIcon from "./SqlIcon"
import TailwindIcon from "./TailwindIcon"
import TypescriptIcon from "./TypescriptIcon"
import WebpackIcon from "./WebpackIcon"

function DevIcon({name}) {
    switch (name) {
        case 'Angular':
          return <AngularIcon />
        case 'CSS':
          return <CssIcon />
        case 'Express':
          return <ExpressIcon />
        case 'Github':
          return <GithubIcon />
        case 'Git':
          return <GitIcon />
        case 'HTML':
            return <HtmlIcon />
        case 'Jenkins':
            return <JenkinsIcon />
        case 'Jest':
            return <JestIcon />
        case 'JavaScript':
            return <JsIcon />
        case 'MongoDB':
            return <MongoIcon />
        case 'NodeJS':
            return <NodeIcon />
        case 'React':
            return <ReactIcon />
        case 'SQL':
            return <SqlIcon />
        case 'Tailwind':
            return <TailwindIcon />
        case 'TypeScript':
            return <TypescriptIcon />
        case 'Webpack':
            return <WebpackIcon />        
        default:
          return null;
    }
}

export default DevIcon;