import { useEffect, useState, useRef } from "react";
function Technologies() {
  const techRef = useRef();
  const [visibile, setVisible] = useState(false);
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
      name: "SQL",
      value: "80%",
    },
    {
      name: "React",
      value: "90%",
    },
    { name: "Vue", value: "80%" },
    { name: "Laravel", value: "60%" },
    {
      name: "Spring",
      value: "30%",
    },
    {
      name: "SCSS",
      value: "90%",
    },
  ]);
  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: 1,
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting || entry.boundingClientRect.top < -10)
        setVisible(true);
    }, options);
    observer.observe(techRef.current);
  }, []);
  return (
    <div className="tech" id="tech">
      <div ref={techRef}></div>
      <ul style={visibile ? {} : { display: "none" }}>
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
                    animationDelay: 1.2 * 0.1 * index + "s",
                  }}
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Technologies;
