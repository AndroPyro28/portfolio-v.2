// @ts-ignore
// @ts-nocheck

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
  carrent,
  jobit,
  tripguide,
  threejs,
  jollibee,
  freelance,
  nestjs,
  nextjs,
  expressjs,
  reactQuery,
  mysql,
  topnotch1,
  topnotch2,
  studyWithMe,
  socialApp,
  zsakers,
  link_demo,
  nginx,
  laravel,
  php
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
    title: "React.js Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "laravel",
    icon: laravel
  },
  {
    name: "PHP",
    icon: php
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
    name: "Docker",
    icon: docker,
  },
  {
    name: "Nginx",
    icon: nginx,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "NestJs",
    icon: nestjs,
  },
  
  {
    name: "expressjs",
    icon: expressjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "react-query",
    icon: reactQuery,
  },
];

const experiences = [
  {
    title: "Service Crew",
    company_name: "Jollibee",
    icon: jollibee,
    iconBg: "red",
    date: "June 2019 - july 2022",
    points: [
      "During my time at Jollibee, I had the privilege of acquiring and refining a plethora of skills that are indispensable in any professional setting. Firstly, the fast-paced environment taught me the importance of time management and quick decision-making.",
      "The need to efficiently handle customer orders, ensure quality, and maintain a rapid pace taught me how to organize my tasks effectively and remain calm under pressure.",
      "the experience bolstered my communication skills significantly. Interacting with a diverse clientele, from families and students to professionals, helped me adapt my communication style to cater to the needs of different individuals. Active listening and clear communication became my allies, allowing me to ensure accurate orders and enhance the overall customer experience.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "N/A",
    icon: freelance,
    iconBg: "#383E56",
    date: "August 2022 - Present",
    points: [
      "Collaborating with cross-functional teams including developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
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
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Top notch grooming",
    description:
      "A web-based live streaming app empowers you to broadcast and connect in real time. Interactive engagement and easy content sharing, all in one platform. Join events.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: topnotch1,
    source_code_link: "https://github.com/AndroPyro28/TopNotchGrooming",
    live_demo_link: ""

  },
  {
    name: "Social Application",
    description:
      "A web-based social app for seamless connections. Share, post, and interact with friends through user-friendly interfaces.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
    ],
    image: socialApp,
    source_code_link: "https://github.com/AndroPyro28/social-application",
    live_demo_link: ""

  },
  {
    name: "Study With Me",
    description:
      "A web-based reviewer app Enhance. Access a comprehensive platform for reviewing diverse subjects. Practice quizzes, track progress, and achieve academic success conveniently.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Create T3 App",
        color: "pink-text-gradient",
      },
    ],
    image: studyWithMe,
    source_code_link: "https://github.com/AndroPyro28/study-with-me",
    // live_demo_link: "https://study-with-me-two.vercel.app/"
    live_demo_link: ""
  },
  {
    name: "Zsakers Cafe",
    description:
      "A web-based food ecommerce app. Browse diverse menus, order with ease, and enjoy doorstep delivery. A seamless platform to indulge in culinary delights from the comfort of your home.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "NestJs",
        color: "pink-text-gradient",
      },
    ],
    image: zsakers,
    source_code_link: "https://github.com/AndroPyro28/Zsackers-cafe-hagonoy",
    live_demo_link: ""
  },
];

export { services, technologies, experiences, testimonials, projects };

