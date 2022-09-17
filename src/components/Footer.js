import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="footer">
      {" "}
      O. AndreY - <FontAwesomeIcon icon={faCopyright} /> 2022
    </div>
  );
}

export default Footer;
