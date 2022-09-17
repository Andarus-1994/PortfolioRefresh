import { useEffect, useState, useRef } from "react";
import Image1 from "../assets/images/img1.jpg";
import Image2 from "../assets/images/img2.jpg";
import Image3 from "../assets/images/img3.jpg";
import ModalProjects from "./ModalProject";
function Projects() {
  const projectsRef = useRef();
  const [visibile, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeObject, setActiveObject] = useState(null);
  const [projects, setProjects] = useState([
    {
      name: "Project 1",
      description: "It was made using Vue JS",
      url: "https://andarus-1994.github.io/BlogDesign/",
      image: Image1,
    },
    {
      name: "Project 2",
      description: "Construction industry Website. Created using ReactJS",
      url: "https://andarus-1994.github.io/ConstructionCO/",
      image: Image2,
    },
    {
      name: "Project Recipes",
      description:
        "This web application is a recipe list that helps the user to manage easier their recipes which also has a description and a list of ingredients and steps to prepare the wanted food. We can also add new recipes or ask for random ones from the fake mocked API. ",
      url: "https://andarus-1994.github.io/Recipes/",
      image: Image3,
    },
    {
      name: "Project Test",
      description: "Testing the description",
      url: "https://andarus-1994.github.io/Recipes/",
      image: Image3,
    },
  ]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) setVisible(true);
    });
    observer.observe(projectsRef.current);
  }, []);
  return (
    <div className="projects" id="portfolio">
      <h2 ref={projectsRef}>- My Projects -</h2>
      {showModal && (
        <ModalProjects
          name={activeObject.name}
          url={activeObject.url}
          description={activeObject.description}
          image={activeObject.image}
          onClose={() => setShowModal(false)}
        />
      )}
      <ul style={visibile ? {} : { display: "none" }}>
        {projects.map((project, index) => (
          <li
            style={{ backgroundImage: "url(" + project.image + ")" }}
            onClick={() => {
              setShowModal(!showModal);
              setActiveObject(project);
            }}
            key={index}
          >
            <div className="projectName">
              <span>{project.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
