export const projectsVariants = {
  hidden: {
    x: "-100vw",
    transition: {
      delay: 0.2,
    },
  },
  visible: {
    x: 0,
    zIndex: 999,
    position: "relative",
    transition: {
      duration: 0.6,
    },
  },
}

export const childVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const projectInfoVariants = {
  open: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const aboutVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

export const contactVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}
export const iconsVariants = {
  hidden: {
    y: 100,
    transition: {
      delay: 0.4,
      duration: 0.3,
    },
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.3,
    },
  },
}
