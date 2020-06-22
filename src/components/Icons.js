import React from "react"
import { useSelector } from "react-redux"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { ReactComponent as Upwork } from "../assets/images/upwork-icon.svg"
import { AnimatePresence, motion } from "framer-motion"
import { iconsVariants } from "../variants"

function Icons() {
  const position = useSelector((state) => state.projectsPosition)
  const mainPosition = useSelector((state) => state.mainPosition)
  const contactPosition = useSelector((state) => state.contactPosition)

  return (
    <AnimatePresence>
      {contactPosition && (
        <motion.div variants={iconsVariants} initial="hidden" animate="visible" exit="hidden" className="bottom-info">
          <div className="bottom-info__icons">
            <FaLinkedin />
            <FaGithub />
            <div className="bottom-info__icons-upwork">
              <Upwork />
            </div>
          </div>
          <div className="bottom-info__status">
            <h2>
              current status:
              <span> a</span>
              <span>v</span>
              <span>a</span>
              <span>i</span>
              <span>l</span>
              <span>a</span>
              <span>b</span>
              <span>l</span>
              <span>e</span>
            </h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Icons
