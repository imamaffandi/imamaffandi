import {
  beatles,
  blackParade,
  blackmotion,
  blackstudioPortfolio,
  camus,
  chess,
  code,
  dangerDays,
  gunsNRoses,
  hypnotize,
  inRainbows,
  journal,
  kafka,
  marcus,
  music,
  ngwarung,
  ngwarungOffline,
  nietzsche,
  okComputer,
  oktha,
  okthaWorks,
  opaline,
  opalineInvitations,
  pierceTheVeil,
  queen,
  reading,
  redistrict,
  redistrictContact,
  restaurant,
  scaffld,
  scaffldProjects,
  stealThisAlbum,
  theBends,
  thesavannaHome,
  thesavannaVillas,
  workout,
} from "@/assets";

// ─── Site ─────────────────────────────────────────────────────────────────────

export const links = [
  { title: "Index", link: "/" },
  { title: "Profile", link: "/profile" },
];

export const social = [
  { title: "Instagram", link: "https://www.instagram.com/imamaffandi__/" },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/imam-affandi-b2ba82290/",
  },
  { title: "Github", link: "https://github.com/imamaffandi" },
  {
    title: "imamaffandi715@gmail.com",
    link: "mailto:imamaffandi715@gmail.com",
  },
  { title: "+62 851-2363-7703", link: "https://wa.me/6285123637703" },
  { title: "+62 812-3067-7319", link: "https://wa.me/6281230677319" },
];

export const whatsapp = "https://wa.me/6281230677319";

// ─── About ────────────────────────────────────────────────────────────────────

const CAREER_START = new Date(2021, 0, 1);

const yearsSince = (date) => {
  const today = new Date();
  let years = today.getFullYear() - date.getFullYear();
  const monthDiff = today.getMonth() - date.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate()))
    years--;
  return years;
};

/*
 * Statements are lists of [text, accent?] runs. The About page splits them into words
 * so each word can brighten in reading order as the statement scrolls past.
 */
const statements = {
  intro: [
    [
      `I'm an independent creative developer with ${yearsSince(CAREER_START)}+ years of experience, working somewhere between `,
    ],
    ["technology, design, and creativity.", true],
  ],
  boxes: [["Human beings are far too complex to fit into "], ["boxes.", true]],
  experiment: [
    [
      "I don't see life as a fixed destination with a predefined meaning. I see it as ",
    ],
    ["an experiment", true],
    [", something to explore, question, experience, and "],
    ["occasionally get wrong.", true],
  ],
  journey: [["A journey "], ["without a blueprint.", true]],
  memory: [
    ["Eventually, everything becomes a memory, and "],
    ["even memories fade.", true],
  ],
  today: [
    ["We don't live only once. "],
    ["We live every day", true],
    [", but we die once."],
  ],
};

const profile = [
  { term: "Name", detail: "Imam Affandi" },
  { term: "Role", detail: "Creative Developer / Full Stack Developer" },
  { term: "Location", detail: "Indonesia" },
  {
    term: "Focus",
    detail: "Interactive websites, web applications, and digital experiences",
  },
  { term: "Stack", detail: "React, Next.js, TypeScript, GSAP, MongoDB" },
];

const services = [
  "Creative development",
  "Frontend & motion",
  "Full-stack web apps",
  "UI implementation",
  "Internal tools",
];

// Each chapter is a short caption, its paragraphs, and an optional image
const journey = [
  {
    title: "Curiosity",
    paragraphs: [
      "I've been interested in coding since I was a kid. I was always curious about technology and the things people could create with it.",
      "But my journey didn't start exactly how I imagined.",
    ],
    image: { src: code, caption: "Where it started" },
  },
  {
    title: "Detour",
    paragraphs: [
      "When choosing my major in high school, I ended up taking a different direction from what I originally wanted. After graduating, pursuing college wasn't financially possible for me.",
      "So, I started working.",
    ],
  },
  {
    title: "Making a living",
    paragraphs: [
      "I took whatever opportunities I could find to make a living. I worked as a waiter, a construction laborer, a gardener, and did other jobs along the way. At the same time, I started freelancing and continued exploring web development.",
      "My career didn't follow a conventional path. There was no carefully planned roadmap, no university degree waiting at the end, and certainly no guarantee that things would work out.",
      "I learned by doing, making mistakes, figuring things out, and sometimes starting over.",
    ],
  },
  {
    title: "Blackstudio",
    paragraphs: [
      "Eventually, I joined Blackstudio, a creative production company where I found myself working at the intersection of technology and creativity. I developed websites, internal systems, workflow tools, and interactive digital experiences while collaborating with people from different creative backgrounds.",
      "That experience expanded the way I think about development. I became increasingly interested in how technology, design, motion, and storytelling could come together.",
    ],
    image: { src: blackstudioPortfolio, caption: "Blackstudio" },
  },
  {
    title: "Beyond the web",
    paragraphs: [
      "Over time, my curiosity took me beyond traditional web development. I started exploring independent products, SaaS, creative experiments, and game development.",
    ],
    image: { src: scaffldProjects, caption: "Scaffld" },
  },
  {
    title: "Looking back",
    paragraphs: [
      "Looking back, the different jobs, unexpected turns, and opportunities weren't necessarily part of a bigger plan. They were simply the experiences that brought me here.",
      "I still don't have everything figured out. And I've become increasingly comfortable with that.",
      "I believe life is an experiment, not a fixed destination. I'm here to keep learning, keep creating, meet different versions of myself, and experience whatever this lifetime has to offer.",
    ],
    image: { src: journal, caption: "Still writing it down" },
  },
];

const interests = [
  {
    label: "Philosophy",
    detail: "Questions about existence, identity, meaning, and impermanence.",
  },
  {
    label: "Psychology",
    detail:
      "Human behavior, perception, and how people understand themselves and others.",
  },
  {
    label: "Technology",
    detail:
      "New tools, creative coding, and the ways technology changes what people can make.",
  },
  {
    label: "Music & films",
    detail: "Stories, atmosphere, and ideas that offer different perspectives.",
  },
  {
    label: "Games",
    detail: "Interactive worlds, systems, mechanics, and experiences.",
  },
];

// Project shots picked at random to float around the hero
const heroShots = [
  { src: scaffld, alt: "Scaffld website" },
  { src: opaline, alt: "Opaline website" },
  { src: blackmotion, alt: "Blackmotion website" },
  { src: oktha, alt: "Oktha website" },
  { src: opalineInvitations, alt: "Opaline invitation designs" },
  { src: ngwarung, alt: "NGwarung website" },
  { src: ngwarungOffline, alt: "NGwarung offline cashier demo" },
  { src: restaurant, alt: "Restaurant website" },
  { src: redistrict, alt: "Reignite District website" },
  { src: thesavannaHome, alt: "The Savanna website" },
];

const work = [
  { src: thesavannaVillas, name: "The Savanna" },
  { src: redistrictContact, name: "Reignite District" },
  { src: okthaWorks, name: "Oktha" },
];

const figures = [
  { src: camus, name: "Albert Camus" },
  { src: nietzsche, name: "Friedrich Nietzsche" },
  { src: kafka, name: "Franz Kafka" },
  { src: marcus, name: "Marcus Aurelius" },
];

const hobbies = [
  { src: chess, label: "Chess" },
  { src: reading, label: "Reading" },
  { src: music, label: "Music" },
  { src: workout, label: "Workout" },
];

const albums = [
  { src: okComputer, alt: "OK Computer, Radiohead" },
  { src: inRainbows, alt: "In Rainbows, Radiohead" },
  { src: theBends, alt: "The Bends, Radiohead" },
  { src: blackParade, alt: "The Black Parade, My Chemical Romance" },
  { src: dangerDays, alt: "Danger Days, My Chemical Romance" },
  { src: hypnotize, alt: "Hypnotize, System of a Down" },
  { src: stealThisAlbum, alt: "Steal This Album!, System of a Down" },
  { src: pierceTheVeil, alt: "Pierce the Veil" },
  { src: gunsNRoses, alt: "Guns N' Roses" },
  { src: queen, alt: "Queen" },
  { src: beatles, alt: "The Beatles" },
];

export const about = {
  statements,
  profile,
  services,
  journey,
  interests,
  heroShots,
  work,
  figures,
  hobbies,
  albums,
};
