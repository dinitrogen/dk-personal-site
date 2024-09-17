export const sharedText = {
  aboutMe: {
    body: [
      {
        id: 1,
        text: {
          __html:
            "Hello and welcome to my personal site! I am a self-taught full-stack web developer with more than 2 years of professional experience working as a software engineer for Fidelity Investments, contributing to applications that serve millions of clients. I strive to build experiences that are attractive, responsive, accessible, and fun to use.",
        },
        delay: 0.5,
      },
      {
        id: 2,
        text: {
          __html:
            "Prior to Fidelity and the software dev chapter of my career, I worked in the oil additives industry for the Lubrizol Corporation, where for 12 years I built a track record of solving challenging technical problems and meeting customer needs. I applied my chemistry expertise to develop and commercialize new lubricant additive components and formulations, many of which are now used across the globe in major OEM vehicles and off-highway equipment.",
        },
        delay: 0.6,
      },
      {
        id: 3,
        text: {
          __html:
            "I live in northeast Ohio, USA, and when I'm not coding I'm either spending time with my family and friends, or involved in one of my various interests, such as music production,  woodworking, biking, or drinking coffee &#9749;.",
        },
        delay: 0.7,
      },
    ],
  },
  projects: [
    {
      name: "DK Synthesis",
      type: "personal",
      description:
        "An e-commerce site for a small business building and selling analog synthesizer modules, created with Angular and NodeJS.",
      videoUrl:
        "https://res.cloudinary.com/dopr8pnvl/video/upload/e_loop/v1725049073/t0wdcwdv5uxqeqxr29o1.gif",
      demoUrl: "https://dk-synthesis.com/",
      codeUrl: "https://github.com/dinitrogen/dk-synth-site",
      devTools: ["Angular", "TypeScript", "NodeJS", "Tailwind", "MongoDB"],
    },
    {
      name: "Mega Memory Game",
      type: "personal",
      description:
        "A retro-styled memory game developed with React and served by a backend API built with C#/ASP.NET.",
      videoUrl:
        "https://res.cloudinary.com/dopr8pnvl/video/upload/e_loop/v1725049170/uj82kcpte0ltfdfmc25c.gif",
      demoUrl: "https://dinitrogen.github.io/memory-card-game/",
      codeUrl: "https://github.com/dinitrogen/memory-card-game",
      devTools: ["React", "JavaScript", "CSS", "C#", ".NET"],
    },
    {
      name: "Stock Finder",
      type: "personal",
      description:
        "A responsive single-page web app built with React and Firebase for searching stock quotes and managing favorites.",
      videoUrl:
        "https://res.cloudinary.com/dopr8pnvl/video/upload/e_loop/v1725049203/jbbifu2zc381lqctxv7e.gif",
      demoUrl: "https://finance-react-app-63c8b.web.app/",
      codeUrl: "https://github.com/dinitrogen/finance-react-app",
      devTools: ["React", "JavaScript", "CSS"],
    },
    {
      name: "Melody Quest",
      type: "personal",
      description:
        "A music education/action game with an 8-bit retro style and an original chiptune soundtrack, offering a fun and engaging approach to help students with memorization of musical note placement on the staff and basic musical theory concepts.",
      videoUrl:
        "https://res.cloudinary.com/dopr8pnvl/video/upload/e_loop/v1725486040/s2oov7gdex991yybvglu.gif",
      demoUrl: "https://dinitrogen.itch.io/melody-quest",
      codeUrl: "https://github.com/dinitrogen/top-game-jam-1",
      devTools: ["HTML", "JavaScript", "CSS"],
    },
    {
      name: "Fidelity Get Invested Pathways",
      type: "professional",
      description:
        "An interactive guide and simplified stock/fund screening tool designed to educate novice investors and help them make their first trade. Built with Angular, TypeScript and NodeJS. (Note: A Fidelity account is required to access.)",
      additionalInfo: "Over 350k customers since launch, over 2.5B invested since launch",
      videoUrl:
        "https://res.cloudinary.com/dopr8pnvl/video/upload/e_loop/v1725471508/bsoeqs200kftchuo9zuf.gif",
      demoUrl: "https://digital.fidelity.com/ftgw/digital/pathway/invest",
      codeUrl: null,
      devTools: ["Angular", "TypeScript", "NodeJS", "Express"],
    },
  ],
};
