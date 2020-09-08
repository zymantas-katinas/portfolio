import React from "react"
import { motion } from "framer-motion"
import {ReactComponent as Avatar} from '../../assets/icons/avatar.svg'

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
      <motion.div variants={childVariants}>
        <Avatar />
      </motion.div>
      <motion.h1 variants={childVariants}>About Me</motion.h1>
      <motion.p variants={childVariants}>
          My name is Zymantas. I am a developer as well as an artist.
Apart from being immersed in creative projects, for the last year, I have been diving deep into web development to merge my technical and artistic sides. I have managed to get decent experience with some of the most popular web development tools, such as React.js, and looking forward to growing further in this field. 
      </motion.p>
      {/* <motion.div initial={{ y: window.innerHeight + 200 }} animate={{ y: 150 }} transition={{ duration: 1 }}> */}
      {/* <motion.div>
        <div className="about__info-triangle"></div>
      </motion.div> */}
    </motion.div>
  )
}

export default AboutMe
