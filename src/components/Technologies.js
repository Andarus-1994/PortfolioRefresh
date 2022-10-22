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
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) setVisible(true);
    });
    observer.observe(techRef.current);
  }, []);
  return (
    <div className="tech" id="tech">
      <div ref={techRef}></div>
      <ul style={visibile ? {} : { display: "none" }}>
        {technologiesList.map((tech, index) => {
          return (
            <li key={index} style={{ animationDelay: 0.3 * index + "s" }}>
              <div className="techName">{tech.name}</div>
              <div className="value">
                {tech.value}
                <div
                  className="fillValue"
                  style={{
                    width: tech.value,
                    animationDelay: 2 * 0.3 * index + "s",
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
