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
    image: portfolio,
    preview: "#",
    source: "https://github.com/imamaffandi/imamaffandi.git",
    description:
      "My web portfolio that includes animation, and 3d objects. You can also send me a message to work with me.",
  },
  {
    index: 2,
    name: "Movie API",
    image: movieapi,
    preview: "https://imamaffandi-api-project.netlify.app/",
    source: "https://github.com/imamaffandi/apiproject",
    description:
      "My web API project that i make with pure HTML, CSS, and javascript. I use The Movie Database API to make this project.",
  },
  {
    index: 3,
    name: "Phone Service",
    image: gorify,
    preview: "https://imamaffandi-gorifycell.netlify.app/",
    source: "https://github.com/imamaffandi/phonecell",
    description:
      "Website that i make with 3d objects using react fiber. I also use framer motion to animate content on the website.",
  },
  {
    index: 4,
    name: "Blackhole Explanation",
    image: blackhole,
    preview: "https://imamaffandi-blackhole-explained.netlify.app/",
    source: "https://github.com/imamaffandi/blackhole-explained.git",
    description:
      "Website that i make with 3d objects using THREE Js. I also use AOS to animate content on the website.",
  },
  {
    index: 5,
    name: "Restaurant Website",
    image: resto,
    preview: "https://imamaffandi-restaurant.netlify.app/",
    source: "https://github.com/imamaffandi/resto.git",
    description:
      "Website that i make with React JS, and framer motion. I also use react elastic carousel library to make this website.",
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
