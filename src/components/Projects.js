import { useEffect, useState, useRef } from "react";
import Image1 from "../assets/images/project_one.jpg";
import Image2 from "../assets/images/project_two.png";
import Image3 from "../assets/images/project_three.png";
import Image4 from "../assets/images/project_four.png";
import Image5 from "../assets/images/project_five.png";
import Bg0 from "../assets/images/one.webp";
import Bg1 from "../assets/images/img1.jpg";
import Bg2 from "../assets/images/img2.jpg";
import Bg3 from "../assets/images/img3.jpg";
import Bg4 from "../assets/images/two.jpg";
import ModalProjects from "./ModalProject";
function Projects() {
  const projectsRef = useRef();
  const [visibile, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeObject, setActiveObject] = useState(null);
  const [projects] = useState([
    {
      name: "Blog Design",
      description: "It was made using Vue JS",
      url: "https://andarus-1994.github.io/BlogDesign/",
      image: Image1,
      backgroundImage: Bg0,
      position: "",
    },
    {
      name: "Construction App",
      description: "Construction industry Website. Created using ReactJS",
      url: "https://andarus-1994.github.io/ConstructionCO/",
      image: Image2,
      backgroundImage: Bg2,
      position: "",
    },
    {
      name: "Recipes List",
      description:
        "This web application is a recipe list that helps the user to manage easier their recipes which also has a description and a list of ingredients and steps to prepare the wanted food. We can also add new recipes or ask for random ones from the fake mocked API. ",
      url: "https://andarus-1994.github.io/Recipes/",
      image: Image3,
      backgroundImage: Bg4,
      position: "",
    },
    {
      name: "To Do List",
      description: "Testing the description",
      url: "https://andarus-1994.github.io/ToDoList/",
      image: Image4,
      backgroundImage: Bg3,
      position: "",
    },
    {
      name: "X & 0",
      description: "Fun little project, X&0 game.",
      url: "https://andarus-1994.github.io/Xand0/",
      image: Image5,
      backgroundImage: Bg1,
      position: "",
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
          position={activeObject.position}
          onClose={() => {
            setShowModal(false);
            document.body.style.overflowY = "auto";
          }}
        />
      )}
      <ul style={visibile ? {} : { display: "none" }}>
        {projects.map((project, index) => (
          <li
            style={{ backgroundImage: "url(" + project.backgroundImage + ")" }}
            onClick={(e) => {
              let position =
                (document.body.getClientRects()[0].right -
                  e.target.scrollWidth) /
                  2 >
                e.clientX
                  ? "left"
                  : (document.body.getClientRects()[0].right -
                      e.target.scrollWidth) /
                      2 <
                      e.clientX &&
                    (document.body.getClientRects()[0].right +
                      e.target.scrollWidth) /
                      2 >
                      e.clientX
                  ? "middle"
                  : "right";
              document.body.style.overflow = "hidden";
              setShowModal(!showModal);
              setActiveObject({ ...project, position: position });
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
