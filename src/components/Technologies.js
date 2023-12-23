import { useEffect, useState, useRef } from "react"
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
  return (
    <div className="tech" id="tech">
      <div></div>

      <ul ref={techRef} className={visibile ? "trigger-animation" : ""}>
        {technologiesList.map((tech, index) => {
          return (
            <li key={index} style={{ animationDelay: 0.1 * index + "s" }}>
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
            </li>
          )
        })}
      </ul>
      <div className="note" style={visibile ? {} : { display: "none" }}>
        <b>Note</b>: The grades reflect my enjoyment and proficiency levels in working with different technologies. They represent my passion for
        coding and the dedication I bring to each project.
      </div>
    </div>
  )
}

export default Technologies
