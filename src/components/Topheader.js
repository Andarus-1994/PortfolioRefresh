import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Lines from "./Lines";
function TopHeader() {
  return (
    <div className="TopHeader">
      <h2>
        Hello, I'm <span>Andrei</span>.
      </h2>
      <h3>
        I'm a <span>Web Developer</span>.
      </h3>
      <button>
        View my work <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <Lines number={35} />
    </div>
  );
}

export default TopHeader;
