const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Project",
    link: "/project",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
const skills = [
  // "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "GSAP",
  "Framer Motion",
  // "Three.js",
  "WebGL",
  // "Node.js",
  // "Express",
  // "MongoDB",
  // "Vercel",
  "Git",
  "Figma",
];
const steps = [
  {
    title: "Discovery",
    desc: "We clarify goals, audience, and must-have outcomes—then map content, sitemap, and priorities so the site matches how your F&B or tourism business actually wins customers.",
  },
  {
    title: "Design",
    desc: "Wireframes and UI that spotlight menus, bookings, and trust—mobile-first layouts, clear CTAs, and brand-consistent visuals tailored to hospitality and travel.",
  },
  {
    title: "Development",
    desc: "Fast, clean builds with responsive behavior, optimized media, and the integrations you need—reservations, WhatsApp, maps, forms—tested before handoff.",
  },
  {
    title: "Launch & optimize",
    desc: "Go-live with analytics and SEO fundamentals, then refine based on real behavior—speed checks, conversion tweaks, and dependable support after launch.",
  },
];
const services = [
  "Landing page & company profile (fast, SEO-ready)",
  "Web app (React / Next.js)",
  "Custom system (admin panel, dashboard, internal tools)",
  "Revamp old websites (WordPress -> modern stack)",
  "Performance & UX optimization",
  "Deployment + basic security setup",
];
export function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
export function getGreeting() {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 0 && hours < 12) {
    return "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    return "Good Afternoon";
  } else if (hours >= 18 && hours < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}
const social = [
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
export { links, skills, steps, services, social };
