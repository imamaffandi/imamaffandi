import {
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

const links = [
  {
    id: "about",
    title: "About",
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
const projects = [
  {
    index: 1,
    name: "Portfolio",
    description:
      "My web portfolio that includes video background, animation, and 3d objects. You can also send me a message to work with me.",

    image: portfolio,
    source_code_link: "#",
  },
  {
    index: 2,
    name: "Movie API",
    description:
      "My web API project that i make with pure HTML, CSS, and javascript. I use The Movie Database API to make this project.",

    image: movieapi,
    source_code_link: "https://imamaffandi-api-project.netlify.app/",
  },
  {
    index: 3,
    name: "Phone Service",
    description:
      "Website that i make with 3d objects using react fiber. I also use framer motion to animate content on the website.",

    image: gorify,
    source_code_link: "https://imamaffandi-gorifycell.netlify.app/",
  },
  {
    index: 4,
    name: "Blackhole Explanation",
    description:
      "Website that i make with 3d objects using THREE Js. I also use AOS to animate content on the website.",

    image: blackhole,
    source_code_link: "https://imamaffandi-blackhole-explained.netlify.app/",
  },
  {
    index: 5,
    name: "Restaurant Website",
    description:
      "Website that i make with React JS, and framer motion. I also use react elastic carousel library to make this website.",

    image: resto,
    source_code_link: "https://imamaffandi-restaurant.netlify.app/",
  },
];
const technologies = [
  {
    index: 1,
    name: "HTML 5",
    icon: html,
  },
  {
    index: 2,
    name: "CSS 3",
    icon: css,
  },
  {
    index: 3,
    name: "JavaScript",
    icon: javascript,
  },
  {
    index: 4,
    name: "TypeScript",
    icon: typescript,
  },
  {
    index: 5,
    name: "React JS",
    icon: reactjs,
  },

  {
    index: 6,
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    index: 7,
    name: "Node JS",
    icon: nodejs,
  },

  {
    index: 8,
    name: "Three JS",
    icon: threejs,
  },
  {
    index: 9,
    name: "git",
    icon: git,
  },
  {
    index: 10,
    name: "figma",
    icon: figma,
  },
];
export { links, projects, technologies };
