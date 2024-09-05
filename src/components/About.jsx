import MotionDiv from "./MotionDiv";

function About({ aboutRef, title, bodyText }) {
  return (
    <section className="md:container mx-auto">
      <div ref={aboutRef} className="mx-12 md:mx-36 pt-4">
        <MotionDiv delay={0.3}>
          <h2 className="text-3xl font-medium">{title}</h2>
        </MotionDiv>
      </div>
      <div>
        {bodyText &&
          bodyText.map((p) => (
            <MotionDiv key={p.id} delay={p.delay}>
              <p
                className="text-xl font-normal w-2/3 mx-auto my-8"
                dangerouslySetInnerHTML={p.text}
              ></p>
            </MotionDiv>
          ))}
      </div>
    </section>
  );
}

export default About;
