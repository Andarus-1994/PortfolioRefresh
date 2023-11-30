import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faStar, faPlay, faBolt, faHashtag } from "@fortawesome/free-solid-svg-icons"
import Lines from "./Lines"
import { useEffect, useRef, useState } from "react"
import { createRoot } from "react-dom/client"
function TopHeader() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [prevCoords, setPrevCoords] = useState({ x: 0, y: 0 })

  const myName = useRef()
  const scrollTo = () => {
    const element = document.getElementById("portfolio").getBoundingClientRect().top + window.scrollY
    window.scroll({
      top: element,
      behavior: "smooth",
    })
  }
  useEffect(() => {})

  const handleMouseMove = (event) => {
    setCoords({
      x: event.pageX,
      y: event.pageY,
    })
    const spanElement = myName.current
    if (spanElement) {
      const { left, top, width, height } = spanElement.getBoundingClientRect()
      const mousePositionX = event.clientX
      const mousePositionY = event.clientY
      const distanceFromCenterX = mousePositionX - (left + width / 4)
      const distanceFromCenterY = mousePositionY - (top + height * 11)
      spanElement.style.left = distanceFromCenterX / 200 + "px"
      spanElement.style.top = distanceFromCenterY / 200 + "px"
    }

    const coords = { x: event.clientX, y: event.clientY }
    const distance = calculateDistance(prevCoords, coords)
    if (distance > 50) {
      const star = document.createElement("span")
      const root = createRoot(star)
      root.render(<FontAwesomeIcon icon={getRandomIcon()} />)
      star.classList.add("star")
      const light = document.getElementsByClassName("TopHeader")
      light[0].append(star)

      if (star) {
        const lightRect = light[0].getBoundingClientRect()
        star.style.left = coords.x - lightRect.left + "px"
        star.style.top = coords.y - lightRect.top + "px"
        star.style.color = getRandomColor()
        star.style.animationName = getRandomAnimation()
        setTimeout(() => {
          star.remove()
        }, [750])
      }
      setPrevCoords(coords)
    }
  }
  function calculateDistance(point1, point2) {
    const dx = point1.x - point2.x
    const dy = point1.y - point2.y
    return Math.sqrt(dx * dx + dy * dy)
  }
  function getRandomColor() {
    const colors = ["#00d9ff", "#ffffff", "#7da6ad"]
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }
  function getRandomAnimation() {
    const animations = ["fade-in-star1", "fade-in-star2", "fade-in-star3"]
    const randomIndex = Math.floor(Math.random() * animations.length)
    return animations[randomIndex]
  }
  function getRandomIcon() {
    const icons = [faPlay, faStar, faBolt, faHashtag]
    const randomIndex = Math.floor(Math.random() * icons.length)
    return icons[randomIndex]
  }
  return (
    <div
      className="TopHeader"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        document.getElementsByClassName("whiteLight")[0].style.display = "none"
      }}
      onMouseEnter={() => {
        document.getElementsByClassName("whiteLight")[0].style.display = "inline"
      }}
    >
      <div className="whiteLight" style={{ top: coords.y, left: coords.x }}></div>
      <h2>
        Hello, I'm{" "}
        <span>
          Andrei <span ref={myName}>Andrei</span>
        </span>{" "}
      </h2>
      <h3>
        <span> Fullstack Web Developer</span>
      </h3>
      <button onClick={scrollTo}>
        View my work <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <Lines number={15} />
    </div>
  )
}

export default TopHeader
