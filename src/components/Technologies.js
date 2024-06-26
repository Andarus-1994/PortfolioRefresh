import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

function Technologies() {
  const techRef = useRef()
  const [visibile, setVisible] = useState(false)
  const [technologiesList] = useState([
    {
      name: "HTML",
      value: "95%",
    },
    {
      name: "CSS",
      value: "95%",
    },
    {
      name: "JS",
      value: "90%",
    },
    {
      name: "TypeScript",
      value: "85%",
    },
    {
      name: "SQL",
      value: "80%",
    },
    {
      name: "React",
      value: "90%",
    },
    {
      name: "NextJS",
      value: "80%",
    },
    { name: "Vue", value: "80%" },
    { name: "Laravel", value: "80%" },
    {
      name: "Spring",
      value: "30%",
    },
    {
      name: "SCSS",
      value: "90%",
    },
  ])
  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: 0.3,
    }
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting || entry.boundingClientRect.top < -10) setVisible(true)
    }, options)
    observer.observe(techRef.current)
  }, [])

  const variants = {
    show: {
      y: 0,
      opacity: 1,
    },
  }
  return (
    <div className="tech" id="tech">
      <div></div>

      <ul ref={techRef} className={visibile ? "trigger-animation" : ""}>
        {technologiesList.map((tech, index) => {
          return (
            <motion.li
              key={index}
              initial={{ y: 500, opacity: 0 }}
              animate={visibile ? "show" : ""}
              variants={variants}
              transition={{
                type: "spring",
                stiffness: 35,
                delay: 0.15 * index,
                duration: 1.8,
              }}
            >
              <div className="techName">{tech.name}</div>
              <div className="value">
                {tech.value}
                <div
                  className="fillValue"
                  style={{
                    width: tech.value,
                    animationDelay: 1 * 0.1 * index + "s",
                  }}
                ></div>
              </div>
            </motion.li>
          )
        })}
      </ul>
      <motion.div
        className="note"
        style={visibile ? {} : { display: "none" }}
        transition={{
          type: "spring",
          stiffness: 35,
          delay: 2,
          duration: 1.8,
        }}
      >
        <b>Note</b>: The grades reflect my enjoyment and proficiency levels in working with different technologies. They represent my passion for coding and the
        dedication I bring to each project.
      </motion.div>
    </div>
  )
}

export default Technologies
