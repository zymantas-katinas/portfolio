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
  const aboutPosition = useSelector((state) => state.aboutPosition)

  return (
    <AnimatePresence>
      {(contactPosition || aboutPosition) && (
        <motion.div variants={iconsVariants} initial="hidden" animate="visible" exit="hidden" className="bottom-info">
          <div className="bottom-info__icons">
            <a href="https://www.linkedin.com/in/zymantas-katinas/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/zymantas-katinas" target="_blank"><FaGithub /></a>

            <div className="bottom-info__icons-upwork">
              <a href="https://www.upwork.com/o/profiles/users/~01b3688dcac59550db/" target="_blank">
                <Upwork />
              </a>
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
