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

// export const projectInfoVariants = {
//   hidden: {
//     y: "100vh",
//     // zIndex: 99,
//   },
//   visible: {
//     y: 0,
//     transition: {
//       delay: 0.3,
//       duration: 0.3,
//     },
//   },
// }
export const mainVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.6,
    },
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
