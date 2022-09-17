import { useEffect, useRef, useState } from "react";

function Navbar() {
  const navRef = useRef();
  const [visibile, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      let topDistance = window.pageYOffset;
      if (topDistance < 100) {
        setVisible(true);
      } else {
        setVisible(entry.isIntersecting);
      }
    });
    observer.observe(navRef.current);
  }, []);
  return (
    <div className="nav">
      <div className={visibile ? "navbar" : "navbar static"}>
        <nav>
          <a href="/#">HOME</a>
          <a href="/#about">ABOUT</a>
          <a href="/#portfolio">PORTFOLIO</a>
          <a href="/#contact">CONTACT</a>
        </nav>
      </div>
      <div
        className="navbarTrigger"
        style={visibile ? {} : { height: "30px", width: "100%" }}
        ref={navRef}
      ></div>
    </div>
  );
}

export default Navbar;
