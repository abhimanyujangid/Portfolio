import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  chat,
  blog,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Developer and Tester",
    company_name: "Infini Application, Mauritius, Africa",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2024 - Jul 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Conducted thorough testing of the CMS to identify and resolve bugs, ensuring system robustness and reliability.",
      "Participating in code reviews and providing constructive feedback to other developers.",

    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Designing Alley",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      "Develop dynamic front-end experiences using React and TypeScript.",
      "Build back-end systems with Node.js to ensure efficient server-side operations.",
      "Participate in code reviews and provide constructive feedback to other developers.",
      "Implement responsive design and ensure cross-browser compatibility.",
      "Ensure adherence to coding standards and industry best practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  }
  
];

const projects = [
  {
    name: "Chat Application",
    description:
      "This is a full-stack chat application built with Node.js, Express, MongoDB for the backend, and React, Redux, and Socket.io for the frontend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/abhimanyujangid/Chat-application",
  },
  {
    name: "Blog project",
    description:
      "This blog project features a secure signup and signin system with protected pages, a visual editor for content creation, and image upload support, all backed by Appwrite.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-hook",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/abhimanyujangid/Appwiteblog",
  }
];

export { services, technologies, experiences, testimonials, projects };
