import React from "react"
import { useSelector } from "react-redux"
import { AnimatePresence, motion } from "framer-motion"

function Main(props) {
  const position = useSelector((state) => state.mainPosition)

  const mainVariants = {
    hidden: {
      // y: "-100vw",
      opacity: 0,
    },
    visible: {
      // y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 3,
        // type: "spring", 
        // stiffness: 60 
      }
    },
  }

  return (
    <AnimatePresence>


        <motion.div variants={mainVariants} initial="hidden" animate="visible" exit="hidden">
          <div className="main">
            {position && (
              // <h1></h1>
              <>
              <div className="main__triangle" />
              <h1 className="main__heading">
                <div className="main__heading-name">Hi, I am Zymantas, <br /></div>
                I <span>Design</span> and <span>Develop</span> <br />
                Unique <span>Websites.</span>
              </h1>
              </>
                )}
          </div>
        </motion.div>
  

    </AnimatePresence>
  )
}

export default Main
