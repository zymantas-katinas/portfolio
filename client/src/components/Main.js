import React from "react"
import { useSelector } from "react-redux"
import { AnimatePresence, motion } from "framer-motion"

function Main(props) {
  const position = useSelector((state) => state.mainPosition)
  const color = useSelector((state) => state.colorNumber.triangle)


  const mainVariants = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1
      }
    },
  }

  return (
    <AnimatePresence>

      {position && (
        <motion.div variants={mainVariants} initial="hidden" animate="visible" exit="hidden">
          <div className="main">
            <div className="main__triangle" style={{ backgroundColor: color }}></div>
            <h1 className="main__heading">
              I <span>Design</span> <br /> and <span>Develop</span> <br />
              Unique <span>Websites.</span>
            </h1>
          </div>
        </motion.div>
      )}

    </AnimatePresence>
  )
}

export default Main
