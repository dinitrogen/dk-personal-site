import MotionDiv from "./MotionDiv";
import "./Skills.scss";
import DevIcon from "./devicons/DevIcon";

function Skills({ skillsRef, title }) {
  const skillArr = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "NodeJS",
    "Express",
    "Git",
    "Github",
    "Jenkins",
    "Jest",
    "MongoDB",
    "SQL",
    "TypeScript",
    "Webpack",
    "Tailwind",
    "C#",
    ".NET",
  ];

  return (
    <section ref={skillsRef} className="md:container mx-auto">
      <div className="mx-12 md:mx-36 pt-12">
        <MotionDiv delay={0.3}>
          <h2 className="text-3xl font-medium">{title}</h2>
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
            {skillArr.map((skill) => {
              return (
                <li key={skill} className="list-item tooltip" data-tip={skill}>
                  <div className="item-inside bg-primary/20 hover:scale-110 hover:bg-primary/40 transition-transform">
                    <DevIcon name={skill} width="w-full" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </MotionDiv>
    </section>
  );
}

export default Skills;
