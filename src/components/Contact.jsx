import MotionDiv from "./MotionDiv";
import { useEffect, useState } from "react";

function Contact({ contactRef, title }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  useEffect(() => {
    const emailRegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!name || !email || !emailRegExp.test(email) || !message) {
      setIsInputValid(false);
    } else {
      setIsInputValid(true);
    }
  }, [name, email, message]);

  function handleChange(event) {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "message") {
      setMessage(event.target.value);
    }
  }

  function submitForm(event) {
    event.preventDefault();
    try {
      fetch("https://dk-synth-site.fly.dev/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email, message: message }),
      });
      setIsMessageSent(true);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <section className="md:container mx-auto">
      <div ref={contactRef} className="mx-12 md:mx-36 pt-12">
        <MotionDiv delay={0.3}>
          <h2 className="text-3xl font-medium">{title}</h2>
        </MotionDiv>
      </div>
      <div className="mx-12 md:w-1/2 md:mx-auto">
        <MotionDiv delay={0.5}>
          <div>
            <p className="text-xl font-normal my-8">
              Please complete the form below to get in touch with me. I look forward to hearing from you! 
            </p>
          </div>
          {isMessageSent ? (
            <div role="alert" className="alert mb-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-bold">
                Thank you for your message. I will respond as soon as I can
                (typically within 24 hours).
              </span>
            </div>
          ) : (
            <form
              className="flex flex-col items-center gap-6"
              onSubmit={submitForm}
            >
              <label className="input input-bordered flex items-center gap-2 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Name"
                  name="name"
                  value={name || ""}
                  onChange={handleChange}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  name="email"
                  value={email || ""}
                  onChange={handleChange}
                />
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-36"
                placeholder="Message"
                name="message"
                value={message || ""}
                onChange={handleChange}
              ></textarea>
              <button
                className="btn btn-primary w-1/2 mb-12 text-white"
                type="submit"
                disabled={!isInputValid}
              >
                Submit
              </button>
            </form>
          )}
        </MotionDiv>
      </div>
    </section>
  );
}

export default Contact;
