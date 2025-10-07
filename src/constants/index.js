import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";

export const HERO_CONTENT = `I am Utkarsh Mishra, a passionate frontend developer specializing in building scalable and user-friendly web applications. With around 2 years of professional experience at Accenture and prior hands-on exposure to Angular, I have honed my expertise in React, JavaScript, HTML, CSS, and modern frontend workflows. I thrive on transforming complex requirements into intuitive interfaces, delivering seamless user experiences, and driving business growth. Eager to contribute to innovative projects, I bring a strong work ethic, problem-solving mindset, and a continuous desire to learn and excel.`;

export const ABOUT_TEXT = `As a frontend developer specializing in React, I bring extensive experience and a deep passion for building exceptional web applications. Over the past couple of years, I have mastered React’s intricacies and leveraged technologies like Angular, JavaScript, HTML, CSS, Tailwind CSS, Framer Motion, and Medusa JS to create robust, scalable, and user-friendly solutions. Driven by curiosity and a strong work ethic, I consistently deliver high-quality results that exceed expectations. I thrive on challenges, innovate to enhance user experiences, and take pride in meeting project goals efficiently. I am eager to join a dynamic team where I can contribute my expertise, collaborate with like-minded professionals, and drive business growth through impactful web solutions.`;

export const EXPERIENCES = [
  {
    year: "NOV 2023 - Present",
    role: "Associate Software Engineer",
    company: "Accenture",
    description: `Trained and worked extensively in frontend technologies (HTML, Tailwind CSS, JavaScript, React) while also receiving backend training in Node.js as part of the MERN stack. Gained a holistic understanding of the software development lifecycle, including data structures and algorithms to enhance problem-solving and create efficient solutions. Strengthened professional skills such as writing and hosting minutes of meetings, and applied Agile methodologies for collaborative project development and continuous improvement. While my primary contributions have been frontend-focused, the backend training provides a strong foundation for full-stack development.`,
    technologies: [
      "HTML",
      "Tailwind",
      "JavaScript",
      "React.js",
      "Node.js (MERN)",
    ],
  },
  {
    year: "AUG 2023 - NOV 2023",
    role: "Software Engineer L-0",
    company: "LogicLadder Technologies",
    description: `Proficient in Angular and Angular Materials, applied JavaScript and TypeScript for enhanced web application functionality and aesthetics as a UI developer. Took initiative in feature development, collaborated on innovative design ideas, and contributed significantly to project enhancement. Seamlessly transitioned between frontend and backend tasks using Java, making substantial contributions to overall web application functionality. Played a pivotal role in The Sustainability Cloud Netzero project, demonstrating a comprehensive understanding of the development stack and contributing as a key team member.
    Actively participated in collaborative discussions, shared design ideas, and demonstrated a strong sense of responsibility as a senior developer within the role.`,
    technologies: ["HTML", "CSS", "Typescript", "Angular"],
  },
];

export const PROJECTS = [
  {
    title: "NetflixGPT",
    image: project1,
    description:
      "An application for searching movies which responds using OpenAI, and gives suggestions to users.",
    technologies: ["HTML", "CSS", "React", "OpenAI"],
    link: "https://netflix-gpt-615w.vercel.app/browse",
  },
  {
    title: "Food Ordering App",
    image: project2,
    description:
      "A Frontend focused food ordering website with features like product listing, shopping cart, and user authentication. Working with live data from swiggy's API",
    technologies: ["HTML", "Tailwind", "React"],
    link: "https://swiggy-react-gules.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind", "React", "Framer Motion"],
    link: "https://portfolio-rho-ten-58.vercel.app/",
  },
  {
    title: "Medusa E-Commerce Store Demo",
    image: project3,
    description:
      "Built a full-stack e-commerce backend with Medusa.js, PostgreSQL, and Next.JS. Implemented product, order, payment, and tax modules. ",
    technologies: ["Medusa.js", "Next.js", "PostgreSQL"],
    link: "https://portfolio-rho-ten-58.vercel.app/",
  },
];

export const CONTACT = {
  address: "Durgakund, Varanasi (221005)",
  phoneNo: "+91 8887004760 ",
  email: "utkarshmishra0708@gmail.com",
};
