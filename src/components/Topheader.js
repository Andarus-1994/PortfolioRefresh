import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Lines from "./Lines";
import { useEffect, useRef, useState } from "react";
function TopHeader() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const myName = useRef();
  const scrollTo = () => {
    const element =
      document.getElementById("portfolio").getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: element,
      behavior: "smooth",
    });
  };
  useEffect(() => {});

  const handleMouseMove = (event) => {
    setCoords({
      x: event.pageX,
      y: event.pageY,
    });
    const spanElement = myName.current;
    if (spanElement) {
      const { left, top, width, height } = spanElement.getBoundingClientRect();
      const mousePositionX = event.clientX;
      const mousePositionY = event.clientY;
      const distanceFromCenterX = mousePositionX - (left + width / 4);
      const distanceFromCenterY = mousePositionY - (top + height * 11);
      spanElement.style.left = distanceFromCenterX / 150 + "px";
      spanElement.style.top = distanceFromCenterY / 150 + "px";
    }
  };
  return (
    <div
      className="TopHeader"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        document.getElementsByClassName("whiteLight")[0].style.display = "none";
      }}
      onMouseEnter={() => {
        document.getElementsByClassName("whiteLight")[0].style.display = "inline";
      }}
    >
      <div className="whiteLight" style={{ top: coords.y, left: coords.x }}></div>
      <h2>
        Hello, I'm{" "}
        <span>
          Andrei <span ref={myName}>Andrei</span>
        </span>{" "}
        .
      </h2>
      <h3>
        I'm a <span>Web Developer</span>.
      </h3>
      <button onClick={scrollTo}>
        View my work <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <Lines number={20} />
    </div>
  );
}

export default TopHeader;
