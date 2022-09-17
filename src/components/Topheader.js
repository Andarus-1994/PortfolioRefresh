import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Lines from "./Lines";
function TopHeader() {
  const scrollTo = () => {
    const element =
      document.getElementById("portfolio").getBoundingClientRect().top +
      window.scrollY;
    window.scroll({
      top: element,
      behavior: "smooth",
    });
  };
  return (
    <div className="TopHeader">
      <h2>
        Hello, I'm <span>Andrei</span>.
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
