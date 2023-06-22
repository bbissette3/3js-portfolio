import {
  linkedin,
  github,
  medium,
  resume,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  vite,
  postgresql,
  python,
  flask,
  sequelize,

  //projects
  studysphere,
  music,
  botdecimation,
  swolldiers,
  petadopter,

  //company
  meta,
  starbucks,
  tesla,
  shopify,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socials = [
  {
    title: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/brian-bissette/",
  },
  {
    title: "Github",
    icon: github,
    url: "https://github.com/bbissette3",
  },
  {
    title: "Medium",
    icon: medium,
    url: "https://medium.com/@bbissette3",
  },
  {
    title: "Resume",
    icon: resume,
    url: "https://drive.google.com/file/d/1AZ2jz9ZgZYwwhbRoyCFZGVwPakLsYXlm/view?usp=sharing",
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "HTML 5",
    icon: html,
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
    name: "Node/Express",
    icon: nodejs,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Sequelize",
    icon: sequelize,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Study Sphere",
    description:
      "A collaborative study app that enables creation and sharing of topics and resources. Its features also promote efficient time management for structured learning.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "sequelize",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: studysphere,
    source_code_link: "https://github.com/bbissette3/study-sphere",
    second_source_code_link: "https://github.com/bbissette3/study-sphere-api",
    web_link: "https://study-sphere.onrender.com/",
  },
  {
    name: "Pet Adopter",
    description:
      "An interactive platform that links potential pet owners with adoptable pets from various shelters, encouraging users to share shelter experiences to guide others in their adoption journey.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "SqlAlchemy",
        color: "green-text-gradient",
      },
    ],
    image: petadopter,
    source_code_link: "https://github.com/FredPerez15/pet-adopter",
    web_link: "https://www.loom.com/share/9eb489ed66ac4521a1db8b8c73b96210",
  },
  {
    name: "Bot Decimation",
    description:
      "A CLI game that offers a dynamic gaming experience with unique character crafting, combat with AI or other players, and an immersive arena mode for a captivating, strategic gameplay.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "SqlAlchemy",
        color: "pink-text-gradient",
      },
    ],
    image: botdecimation,
    source_code_link: "https://github.com/bbissette3/phase-3-project-group-3",
    web_link: "https://www.loom.com/share/1722c223289b49579027c9fb5f48a383",
  },
  {
    name: "Swolldiers",
    description:
      "A fitness application offering a library of exercises with GIFs and difficulty ratings, allowing users to discover, curate, and follow workouts tailored to their fitness level.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Auth0",
        color: "pink-text-gradient",
      },
      {
        name: "JSON",
        color: "blue-text-gradient",
      },
    ],
    image: swolldiers,
    source_code_link:
      "https://github.com/bbissette3/phase-2-group-project-swolldiers",
    web_link: null,
  },
  {
    name: "Music Lover",
    description:
      "A dynamic music management app that allows users to curate their personal music library, rate tracks, and create customized playlists based on preferences, providing a personalized and interactive music journey.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "JSON",
        color: "green-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/bbissette3/group-2-phase-1-project",
    web_link: null,
  },
];

export { socials, technologies, experiences, testimonials, projects };
