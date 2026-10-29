import { blackstudio, blackmotion, oktha, redistrict } from "../assets";
export const data = [
  {
    id: "blackstudio",
    image: blackstudio,
    title: "Blackstudio",
    link: "https://blackstudio.id",
    path: "blackstudio",
    description:
      "Service: end-to-end landing page engineering with custom motion and section-based navigation. Client gets premium brand presentation, smoother storytelling flow, and stable long-term maintenance.",
  },
  {
    id: "blackmotion",
    image: blackmotion,
    title: "Blackmotion",
    link: "https://blackmotion.id",
    path: "blackmotion",
    description:
      "Service: interactive campaign landing page with advanced transitions and floating 3D cards. Client gets higher visual impact and more memorable first impression for portfolio visitors.",
  },
  {
    id: "oktha-viano",
    image: oktha,
    title: "Oktha Viano",
    link: "https://okthaviano.netlify.app",
    path: "oktha",
    description:
      "Service: portfolio website for video creator with subtle motion system and polished transitions. Client gets stronger personal brand perception and clearer showcase structure for potential leads.",
  },
  {
    id: "reignite-district",
    image: redistrict,
    title: "Reignite District",
    link: "https://reignitedistrict.netlify.app/",
    path: "redistrict",
    description:
      "Service: e-commerce landing page plus admin panel for product management. Client gets easier catalog updates and smoother browsing experience for shoppers.",
  },
];

const toSentence = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).replace(/\.?$/, ".");

// Descriptions read "Service: <what was built>. Client gets <outcome>."
export const getProjectSummary = ({ description }) => {
  const [built, outcome] = description
    .replace(/^Service:\s*/, "")
    .split(/\.\s*Client gets\s*/);
  return {
    built: toSentence(built),
    outcome: outcome ? toSentence(outcome) : null,
  };
};

export const getHostname = ({ link }) =>
  new URL(link).hostname.replace(/^www\./, "");
