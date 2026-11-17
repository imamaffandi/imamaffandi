import { blackstudio, blackmotion, oktha, redistrict, opaline, ngwarung, scaffld } from "../assets";
export const data = [
  {
    id: "blackstudio",
    image: blackstudio,
    title: "Blackstudio",
    link: "https://blackstudio.id",
    description:
      "Service: end-to-end landing page engineering with custom motion and section-based navigation. Client gets premium brand presentation, smoother storytelling flow, and stable long-term maintenance.",
  },
  {
    id: "blackmotion",
    image: blackmotion,
    title: "Blackmotion",
    link: "https://blackmotion.id",
    description:
      "Service: interactive campaign landing page with advanced transitions and floating 3D cards. Client gets higher visual impact and more memorable first impression for portfolio visitors.",
  },
  {
    id: "oktha-viano",
    image: oktha,
    title: "Oktha Viano",
    link: "https://okthaviano.netlify.app",
    description:
      "Service: portfolio website for video creator with subtle motion system and polished transitions. Client gets stronger personal brand perception and clearer showcase structure for potential leads.",
  },
  {
    id: "reignite-district",
    image: redistrict,
    title: "Reignite District",
    link: "https://reignitedistrict.netlify.app/",
    description:
      "Service: e-commerce landing page plus admin panel for product management. Client gets easier catalog updates and smoother browsing experience for shoppers.",
  },
  {
    id: "opaline",
    image: opaline,
    title: "Opaline",
    link: "https://opaline-official.netlify.app",
    description:
      "Service: landing page for a digital wedding invitation studio with editorial typography and layered photo composition. Client gets an elegant showcase of invitation packages that turns visitors into orders.",
  },
  {
    id: "ngwarung",
    image: ngwarung,
    title: "NGwarung",
    link: "https://ngwarung.vercel.app",
    description:
      "Service: product landing page for an offline-first POS and inventory app built for small warungs, with an interactive cashier demo. Client gets a clear pitch that explains the app in seconds and drives trial sign-ups.",
  },
  {
    id: "scaffld",
    image: scaffld,
    title: "Scaffld",
    link: "https://scaffld.github.io/scaffld",
    description:
      "Service: studio website with bold Swiss-style layout, oversized type, and scroll-driven motion. Client gets a distinctive brand presence that sets the studio apart and frames its project portfolio.",
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
