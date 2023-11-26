import { useEffect, useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGaugeHigh, faObjectGroup, faLightbulb, faBoltLightning } from "@fortawesome/free-solid-svg-icons"
import Technologies from "./Technologies"
function About() {
  const aboutRef = useRef()
  const [visibile, setVisible] = useState(false)
  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: 0.2,
    }
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting || entry.boundingClientRect.top < 750) setVisible(true)
    }, options)
    observer.observe(aboutRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <div className="about" id="about" ref={aboutRef}>
      {visibile && (
        <h2>
          <span>A</span>bout
        </h2>
      )}
      <ul style={visibile ? {} : { display: "none" }}>
        <li>
          <span>
            <FontAwesomeIcon icon={faGaugeHigh} />
          </span>
          <h3>Quick Load</h3>
          <p>Fast loading time and lag-free experience is my first concern.</p>
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faObjectGroup} />
          </span>
          <h3>Design</h3>
          <p>Always doing my best to create pleasant designs.</p>
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faLightbulb} />
          </span>
          <h3>Intuitive</h3>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faBoltLightning} />
          </span>
          <h3>Dynamic</h3>
          <p>Built-in functions to make use of the site's interactivity.</p>
        </li>
      </ul>
      <Technologies />
    </div>
  )
}

export default About
