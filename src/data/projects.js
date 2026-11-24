import {
  blackstudio,
  blackmotion,
  oktha,
  redistrict,
  opaline,
  ngwarung,
  scaffld,
  thesavanna,
  oriri,
  pawon,
  polykromy,
} from "../assets";
export const data = [
  {
    id: "scaffld",
    image: scaffld,
    title: "Scaffld",
    link: "https://scaffld.github.io/scaffld",
    description:
      "Service: studio website with bold Swiss-style layout, oversized type, and scroll-driven motion. Client gets a distinctive brand presence that sets the studio apart and frames its project portfolio.",
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
    id: "thesavanna",
    image: thesavanna,
    title: "The Savanna",
    link: "https://thesavanna.id",
    description:
      "Service: property website for a villa development, presenting villa types, investment details, and contact flow. Client gets a polished sales tool that builds buyer trust and turns interest into inquiries.",
  },
  {
    id: "oriri",
    image: oriri,
    title: "Oriri",
    link: "https://oririphotobooth.vercel.app",
    description:
      "Service: photobooth SaaS for event vendors, with a branded booth that runs from any laptop, QR-code photo strips, and a studio dashboard for every event's gallery. Client gets one platform to run booths and deliver photos without extra hardware.",
  },
  {
    id: "polykromy",
    image: polykromy,
    title: "Polykromy",
    link: "https://imamaffandi.github.io/polykromy/",
    description:
      "Service: studio website for an independent Roblox game studio, with pixel typography, halftone graphics, and a guide character. Client gets a playful brand world that showcases its games and invites collaboration.",
  },
  {
    id: "pawon-kemepyar",
    image: pawon,
    title: "Pawon Kemepyar",
    link: "https://pawonkemepyar.netlify.app",
    description:
      "Service: restaurant website for a Javanese and Nusantara kitchen, with editorial typography, a full menu, gallery, and reservations. Client gets a warm online presence that brings diners to the table.",
  },
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
