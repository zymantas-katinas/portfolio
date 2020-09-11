import React from "react"
import { motion } from "framer-motion"
import { ReactComponent as Avatar } from "../../assets/icons/avatar.svg"
import { FaReact, FaJsSquare, FaSass, FaGitAlt, FaJava, FaAdobe, FaPaperPlane } from "react-icons/fa"
import { DiNpm } from "react-icons/di"
import { ReactComponent as Typescript } from "../../assets/icons/typescript.svg"
import { useDispatch } from "react-redux"
import { contactSelected, aboutAway, projectsAway, setTrianglesAway, mainAway } from "../../actions"

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
  const dispatch = useDispatch()
  const handleClickContact = () => {
    dispatch(contactSelected())
    dispatch(setTrianglesAway())
    dispatch(aboutAway())
    dispatch(projectsAway())
    dispatch(mainAway())
  }

  return (
    <motion.div className="about__info" variants={variants}>
      <div className="about__info-text">
        <motion.div variants={childVariants} className="about__info-avatar">
          <Avatar />
        </motion.div>
        <motion.h1 variants={childVariants}>About Me</motion.h1>
        <motion.p variants={childVariants}>
          &nbsp;&nbsp;&nbsp;I am a developer as well as an artist. Or you could say a creative and technical person.
          Apart from being immersed in creative projects, for the last year, I have been diving deep into web
          development, trying to merge my technical and artistic sides.
        </motion.p>
        <motion.p variants={childVariants}>
          &nbsp;&nbsp;&nbsp;In one year, I have gained experience with some of the most popular front-end web
          development tools, such as React.js and Sass, and I feel that I found the place to use my best sides at their
          full potential.
        </motion.p>
        <motion.p variants={childVariants}>
          &nbsp;&nbsp;&nbsp;I cannot wait to continue my career in this path, so if you are looking for a team member or
          want to know more about me, drop me a line.
          <span className="about__info-send" onClick={handleClickContact}>
            <FaPaperPlane />
          </span>
        </motion.p>
      </div>
      <motion.div variants={childVariants} className="about__info-icons">
        <FaReact />
        <FaJsSquare />
        <FaSass />
        <FaGitAlt />
        <FaJava />
        <DiNpm />
        <Typescript />
        <FaAdobe />
      </motion.div>
    </motion.div>
  )
}

export default AboutMe
