import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarker,
  faBriefcase,
  faLightbulb,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
function Contact() {
  useEffect(() => {}, []);
  return (
    <div className="contact" id="contact">
      <div className="leftContact">
        <h3>Details</h3>
        <ul>
          <li>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>andrei_king1@yahoo.com</span>
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faMapMarker} /> <span>Romania</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBriefcase} />
            <span>Web Developer</span>
          </li>
        </ul>
      </div>
      <div className="rightContact">
        <h3>Contact me</h3>
        <form
          action="https://formsubmit.co/acf3b2a9b05e4db68092254332484333"
          method="POST"
          className="contactForm"
        >
          <input
            type="hidden"
            name="_next"
            value="https://andarus-1994.github.io/PortfolioRefresh/"
          />
          <label>Name</label>
          <input placeholder="ex: Andrey" name="name" required />
          <label>Email</label>
          <input placeholder="ex: andrey@gmail.com" name="email" required />
          <label>Your message</label>
          <textarea placeholder="Write a message..." name="message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
