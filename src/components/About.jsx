import MotionDiv from "./MotionDiv";

function About({ aboutRef, title, bodyText }) {
  return (
    <section>
      <div ref={aboutRef} className="mx-12 pt-24">
        <MotionDiv delay={0.3}>
          <h2 className="text-2xl font-medium">{title}</h2>
        </MotionDiv>
      </div>
      <div>
        {bodyText &&
          bodyText.map((p) => (
            <MotionDiv key={p.id} delay={p.delay}>
              <p className="text-xl font-normal w-2/3 mx-auto my-8">{p.text}</p>
            </MotionDiv>
          ))}
      </div>

      <div className="h-96"></div>
    </section>
  );
}

export default About;
