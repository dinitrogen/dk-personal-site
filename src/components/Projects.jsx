import MotionDiv from './MotionDiv'
import Video from './Video';

function Projects({projectsRef, title, projects}) {
    
    return (
        <section>
            <div ref={projectsRef} className="mx-12">
                <MotionDiv delay={0.3}>
                    <h2 className='text-2xl font-medium'>{title}</h2>
                </MotionDiv>
            </div>
            <div className='w-1/2 mx-auto my-24'>
                <Video src={projects[0].videoUrl}/>
            </div>
            <div className='w-1/2 mx-auto my-24'>
                <Video src={projects[1].videoUrl}/>
            </div>
            <div className='w-1/2 mx-auto my-24'>
                <Video src={projects[2].videoUrl}/>
            </div>
          
            <div className='h-96'></div>
        </section>
    )
}

export default Projects;