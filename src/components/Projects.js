import { useEffect, useState, useRef, useMemo } from "react";
import Image1 from "../assets/images/project_one.jpg";
import Image2 from "../assets/images/project_two.png";
import Image3 from "../assets/images/project_three.png";
import Image4 from "../assets/images/project_four.png";
import Image5 from "../assets/images/project_five.png";
import Bg0 from "../assets/images/one.webp";
import Bg1 from "../assets/images/toDo.jpg";
import Bg2 from "../assets/images/img2.jpg";
import Bg3 from "../assets/images/img3.jpg";
import Bg4 from "../assets/images/two.jpg";
import Bg5 from "../assets/images/ticTac-min.jpg";
import Bg6 from "../assets/images/webCommerce-min.jpg";
import ModalProjects from "./ModalProject";
function Projects() {
  const projectsRef = useRef();
  const [visibile, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeObject, setActiveObject] = useState(null);
  const [projects, setProjects] = useState([
    {
      name: "To Do List",
      description:
        "A simple application that makes use of CRUD (create, read, update and delete) only on client side.",
      url: "https://andarus-1994.github.io/ToDoList/",
      image: Image4,
      backgroundImage: Bg1,
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
      name: "Construction App",
      description:
        "Construction industry presentation Website that makes use of a few animations and inventive design. Created using ReactJS.",
      url: "https://andarus-1994.github.io/ConstructionCO/",
      image: Image2,
      backgroundImage: Bg2,
      position: "",
    },
    {
      name: "X & 0",
      description: "Fun little project, X&0 game.",
      url: "https://andarus-1994.github.io/Xand0/",
      image: Image5,
      backgroundImage: Bg5,
      position: "",
    },
    {
      name: "Blog Design",
      description:
        "Website made using Vue JS only to practice some design skills.",
      url: "https://andarus-1994.github.io/BlogDesign/",
      image: Image1,
      backgroundImage: Bg0,
      position: "",
    },
    {
      name: "E-Commerce Shop App",
      description:
        "This is an web application for E-Commerce (online shop) and it is created using Laravel for Back End and React for Front End. I focused mostly on creating functionality and just a bit on design. It contains the following main functionalities: creating user account/reseting user's password (via email), display products, dashboard for the admin to add / remove products, payment method (using stripe). ",
      url: "",
      image: Bg6,
      backgroundImage: Bg6,
      position: "",
    },
  ]);
  const calculatePosition = useMemo(() => {
    let dummyArray = projects;
    if (visibile) {
      projectsRef.current &&
        Object.values(projectsRef.current.children).forEach(
          (project, index) => {
            let position =
              (document.body.getClientRects()[0].right - project.scrollWidth) /
                2 >
              project.getBoundingClientRect().x
                ? "left"
                : (document.body.getClientRects()[0].right -
                    project.scrollWidth) /
                    2 <=
                    project.getBoundingClientRect().x &&
                  (document.body.getClientRects()[0].right +
                    project.scrollWidth) /
                    2 >=
                    project.getBoundingClientRect().x
                ? "middle"
                : "right";
            dummyArray[index].position = position;
          }
        );
    }
    return dummyArray;
  }, [visibile, projects]);
  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: 0.3,
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) setVisible(true);
    }, options);
    observer.observe(projectsRef.current);
    setProjects(calculatePosition);

    return () => {
      observer.disconnect();
    };
  }, [calculatePosition]);
  return (
    <div className="projects" id="portfolio">
      <h2>- My Projects -</h2>
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
      <ul ref={projectsRef}>
        {projects.map((project, index) => (
          <li
            style={
              visibile
                ? project.position === "left"
                  ? {
                      backgroundImage: "url(" + project.backgroundImage + ")",
                      animationDelay: 0.3 * index + "s",
                      animationName: "fade-in-left",
                    }
                  : project.position === "right"
                  ? {
                      backgroundImage: "url(" + project.backgroundImage + ")",
                      animationDelay: 0.3 * index + "s",
                      animationName: "fade-in-right",
                    }
                  : {
                      backgroundImage: "url(" + project.backgroundImage + ")",
                      animationDelay: 0.3 * index + "s",
                      animationName: "fade-in-middle",
                    }
                : { opacity: "0" }
            }
            onClick={() => {
              document.body.style.overflow = "hidden";
              setShowModal(!showModal);
              setActiveObject({ ...project });
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
