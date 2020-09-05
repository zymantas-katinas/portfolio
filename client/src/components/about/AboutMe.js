import React from "react"
import { motion } from "framer-motion"
import Avatar from './avatar'

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
      {/* <div className="left"></div>
      <div className="right"></div> */}
      <motion.div variants={childVariants}><Avatar /></motion.div>
      <motion.h1 variants={childVariants}>Something About Me</motion.h1>
      <motion.p variants={childVariants}>
        I am a creative person with a developers mindset. Apart from being an outdoor activities enthusiast, I love to spend days immersed in creative projects. Challenges make me excited instead of anxious and I tend to get my teammates to feel the same way.

      </motion.p>
      {/* <div className="main__text">
        <p>“I like to make stuff”</p>
      </div> */}
    </motion.div>
  )
}

export default AboutMe
