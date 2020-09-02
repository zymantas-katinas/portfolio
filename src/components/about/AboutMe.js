import React from "react"
import { motion } from "framer-motion"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const childVariants = {
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

function AboutMe(props) {
  return (
    <motion.div className="about__info" variants={variants}>
      <div className="left"></div>
      <div className="right"></div>
      <motion.h1 variants={childVariants}>Something About Me</motion.h1>
      <motion.p variants={childVariants}>
        I am currently developing this portfolio web version. Visit the older version to find out more about me.
        <a href="http://old.zymantaskatinas.com/"> old.zymantaskatinas.com</a>
      </motion.p>
    </motion.div>
  )
}

export default AboutMe
