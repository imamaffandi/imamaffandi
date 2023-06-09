import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  portfolio,
  movieapi,
  gorify,
  blackhole,
  resto,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "My web portfolio that includes video background, animation, and 3d objects. You can also send me a message to work with me.",

    image: portfolio,
    source_code_link: "#",
  },
  {
    name: "Movie API",
    description:
      "My web API project that i make with pure HTML, CSS, and javascript. I use The Movie Database API to make this project.",

    image: movieapi,
    source_code_link: "https://imamaffandi-api-project.netlify.app/",
  },
  {
    name: "Phone Service",
    description:
      "Website that i make with 3d objects using react fiber. I also use framer motion to animate content on the website.",

    image: gorify,
    source_code_link: "https://imamaffandi-gorifycell.netlify.app/",
  },
  {
    name: "Blackhole Explanation",
    description:
      "Website that i make with 3d objects using THREE Js. I also use AOS to animate content on the website.",

    image: blackhole,
    source_code_link: "https://imamaffandi-blackhole-explained.netlify.app/",
  },
  {
    name: "Restaurant Website",
    description:
      "Website that i make with React JS, and framer motion. I also use react elastic carousel library to make this website.",

    image: resto,
    source_code_link: "https://imamaffandi-restaurant.netlify.app/",
  },
];

export { services, technologies, projects };
