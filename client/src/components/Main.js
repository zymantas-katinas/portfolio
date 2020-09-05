import React from "react"
import { useSelector } from "react-redux"
import { AnimatePresence, motion } from "framer-motion"
import { mainVariants } from "../variants"

function Main() {
  const position = useSelector((state) => state.mainPosition)
  const color = useSelector((state) => state.colorNumber)

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
