import { useEffect, useRef, useState } from "react"

function Navbar() {
  const navRef = useRef()
  const [visibile, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      let topDistance = window.pageYOffset
      if (topDistance < 100) {
        setVisible(true)
      } else {
        setVisible(entry.isIntersecting)
      }
    })
    observer.observe(navRef.current)
  }, [])
  return (
    <div className="nav">
      <div className={visibile ? "navbar" : "navbar static"}>
        <nav>
          <a href="https://andarus-1994.github.io/PortfolioRefresh/#">Home</a>
          <a href="https://andarus-1994.github.io/PortfolioRefresh/#about">About</a>
          <a href="https://andarus-1994.github.io/PortfolioRefresh/#portfolio">Portfolio</a>
          <a href="https://andarus-1994.github.io/PortfolioRefresh/#contact">Contact</a>
        </nav>
      </div>
      <div className="navbarTrigger" style={visibile ? {} : { height: "30px", width: "100%" }} ref={navRef}></div>
    </div>
  )
}

export default Navbar
