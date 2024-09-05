import { useRef } from "react";
import MotionDiv from "./MotionDiv";
import Video from "./Video";

function Projects({ projectsRef, title, projects }) {
  const toggle = useRef(true);

  return (
    <section className="md:container mx-auto">
      <div ref={projectsRef} className="mx-12 md:mx-36 pt-12">
        <MotionDiv delay={0.3}>
          <h2 className="text-3xl font-medium">{title}</h2>
        </MotionDiv>
      </div>
      <div>
        <MotionDiv delay={0.4}>
          <p className="text-xl font-normal w-2/3 mx-auto my-8">
            Here are some examples of my work, including professional projects I
            have contributed to as well as some personal projects, leveraging the various
            tools and technologies I have gained. Hover or
            tap on each video below for more details and links to the application and
            source code.
          </p>
        </MotionDiv>
      </div>

      <MotionDiv delay={0.5}>
        <div className="w-2/3 mx-auto my-8">
          <h3 className="text-2xl font-medium">Professional Projects</h3>
        </div>

        {projects.map((project) => {
          if (project.type === "professional") {
            toggle.current = !toggle.current;
            return (
              <div key={project.name} className="w-80 md:w-2/3 mx-auto mb-24">
                <div
                  className={`flex flex-col ${toggle.current ? "lg:flex-row" : "lg:flex-row-reverse"} justify-center gap-12`}
                >
                  <div className="flex flex-col justify-center lg:basis-[60%]">
                    <h4 className="text-lg font-medium mb-4">{project.name}</h4>
                    <p>{project.description}</p>
                  </div>
                  <div className="min-w-[300px]">
                    <Video
                      src={project.videoUrl}
                      codeUrl={project.codeUrl}
                      demoUrl={project.demoUrl}
                      devTools={project.devTools}
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}

        <div className="w-2/3 mx-auto mb-8">
          <h3 className="text-2xl font-medium">Personal Projects</h3>
        </div>

        {projects.map((project) => {
          if (project.type === "personal") {
            toggle.current = !toggle.current;
            return (
              <div key={project.name} className="w-80 md:w-2/3 mx-auto mb-24">
                <div
                  className={`flex flex-col ${toggle.current ? "lg:flex-row" : "lg:flex-row-reverse"} justify-center gap-12`}
                >
                  <div className="flex flex-col justify-center lg:basis-[60%]">
                    <h4 className="text-lg font-medium mb-4">{project.name}</h4>
                    <p>{project.description}</p>
                  </div>
                  <div className="min-w-[300px]">
                    <Video
                      src={project.videoUrl}
                      codeUrl={project.codeUrl}
                      demoUrl={project.demoUrl}
                      devTools={project.devTools}
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </MotionDiv>
    </section>
  );
}

export default Projects;
