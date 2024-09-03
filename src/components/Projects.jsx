import MotionDiv from "./MotionDiv";
import Video from "./Video";

function Projects({ projectsRef, title, projects }) {
  return (
    <section>
      <div ref={projectsRef} className="mx-12 pt-24">
        <MotionDiv delay={0.3}>
          <h2 className="text-2xl font-medium">{title}</h2>
        </MotionDiv>
      </div>

      <MotionDiv delay={0.5}>
        <div className="w-80 md:w-2/3 mx-auto my-24">
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div className="md:basis-1/3 flex flex-col justify-center">
              <h3 className="text-xl font-medium mb-4">{projects[0].name}</h3>
              <p>{projects[0].description}</p>
            </div>
            <div className="md:basis-2/3 flex justify-center">
              <Video
                src={projects[0].videoUrl}
                codeUrl={projects[0].codeUrl}
                demoUrl={projects[0].demoUrl}
              />
            </div>
          </div>
        </div>

        <div className="w-80 md:w-2/3 mx-auto my-24">
          <div className="flex flex-col-reverse md:flex-row justify-center gap-12">
            <div className="md:basis-2/3 flex justify-center">
              <Video
                src={projects[1].videoUrl}
                codeUrl={projects[1].codeUrl}
                demoUrl={projects[1].demoUrl}
              />
            </div>
            <div className="md:basis-1/3 flex flex-col justify-center">
              <h3 className="text-xl font-medium mb-4">{projects[1].name}</h3>
              <p>{projects[1].description}</p>
            </div>
          </div>
        </div>

        <div className="w-80 md:w-2/3 mx-auto my-24">
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div className="md:basis-1/3 flex flex-col justify-center">
              <h3 className="text-xl font-medium mb-4">{projects[2].name}</h3>
              <p>{projects[2].description}</p>
            </div>
            <div className="md:basis-2/3 flex justify-center">
              <Video
                src={projects[2].videoUrl}
                codeUrl={projects[2].codeUrl}
                demoUrl={projects[2].demoUrl}
              />
            </div>
          </div>
        </div>
      </MotionDiv>
      <div className="h-96"></div>
    </section>
  );
}

export default Projects;
