export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
      ease: "linear",
    },
  },
};
export const itemUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: "linear" },
  },
};
export const itemLeft = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: "linear" },
  },
};
export const right = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: "linear" },
  },
};
export const left = {
  hidden: { x: 200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: "linear" },
  },
};
export const up = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    transition: { ease: "linear" },
    y: 0,
    opacity: 1,
  },
};
