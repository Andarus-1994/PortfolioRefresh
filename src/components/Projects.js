import { useEffect, useState, useRef, useMemo } from "react"
import Image1 from "../assets/images/project_one.jpg"
import Image2 from "../assets/images/construction_image.png"
import Image3 from "../assets/images/project_three.png"
import Image4 from "../assets/images/project_four.png"
import Image5 from "../assets/images/project_five.png"
import Image6 from "../assets/images/image_invoices.jpg"
import ShopImage from "../assets/images/shop_image.png"
import Bg0 from "../assets/images/invoices.png"
import Bg1 from "../assets/images/toDo.jpg"
import Bg2 from "../assets/images/project_two.png"
import Bg3 from "../assets/images/blog.png"
import Bg4 from "../assets/images/two.jpg"
import Bg5 from "../assets/images/ticTac-min.jpg"
import Bg6 from "../assets/images/webCommerce-min.jpg"
import ModalProjects from "./ModalProject"
import { motion } from "framer-motion"

function Projects() {
  const projectsRef = useRef()
  const [visibile, setVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [activeObject, setActiveObject] = useState(null)
  const [projects, setProjects] = useState([
    {
      name: "E-Commerce Shop App",
      description:
        "This is an web application for E-Commerce (online shop) and it is created using NextJS with TypeScript (React) for Front End and Laravel for Back End. I focused mostly on creating functionality and just a bit on design. It contains the following main functionalities: creating user account/reseting user's password (via email), display products, dashboard for the admin with different uses like view / add / remove products, preview user list and others. ",
      url: "https://shop-andrey.vercel.app/",
      image: ShopImage,
      backgroundImage: Bg6,
      position: "",
    },
    {
      name: "Invoices App",
      description:
        "Using React and Typescript for the frontend, and supported by the strong features of Node.js on the server side. It's an app that's still being worked on. Check it out!",
      url: "https://invoices-frontend-rho.vercel.app/",
      image: Bg0,
      backgroundImage: Image6,
      position: "",
    },
    {
      name: "To Do List",
      description: "A simple application that makes use of CRUD (create, read, update and delete) only on client side.",
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
      description: "Construction industry presentation Website that makes use of a few animations and inventive design. Created using ReactJS.",
      url: "https://andarus-1994.github.io/ConstructionCO/",
      image: Bg2,
      backgroundImage: Image2,
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
      description: "Website made using Vue JS only to practice some design skills.",
      url: "https://andarus-1994.github.io/BlogDesign/",
      image: Image1,
      backgroundImage: Bg5,
      position: "",
    },
  ])
  const calculatePosition = useMemo(() => {
    console.log("enters here")
    let dummyArray = projects
    if (visibile) {
      projectsRef.current &&
        Object.values(projectsRef.current.children).forEach((project, index) => {
          let position =
            (document.body.getClientRects()[0].right - project.scrollWidth) / 2 > project.getBoundingClientRect().x
              ? "left"
              : (document.body.getClientRects()[0].right - project.scrollWidth) / 2 <= project.getBoundingClientRect().x &&
                (document.body.getClientRects()[0].right + project.scrollWidth) / 2 >= project.getBoundingClientRect().x
              ? "middle"
              : "right"
          dummyArray[index].position = position
        })
    }
    return dummyArray
  }, [visibile, projects])
  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: 0.25,
    }
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) setVisible(true)
    }, options)
    observer.observe(projectsRef.current)
    setProjects(calculatePosition)

    return () => {
      observer.disconnect()
    }
  }, [calculatePosition])

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  useEffect(() => {
    if (visibile) {
      const interval = setInterval(() => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [projects.length, visibile])

  return (
    <div className="projects" id="portfolio">
      {visibile && <h2> Personal Projects </h2>}
      {showModal && (
        <ModalProjects
          name={activeObject.name}
          url={activeObject.url}
          description={activeObject.description}
          image={activeObject.image}
          position={activeObject.position}
          onClose={() => {
            setShowModal(false)
            document.body.style.overflowY = "auto"
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
                      animationDelay: 0.12 * index + "s",
                      animationName: "fade-in-left",
                    }
                  : project.position === "right"
                  ? {
                      backgroundImage: "url(" + project.backgroundImage + ")",
                      animationDelay: 0.17 * index + "s",
                      animationName: "fade-in-right",
                    }
                  : {
                      backgroundImage: "url(" + project.backgroundImage + ")",
                      animationDelay: 0.15 * index + "s",
                      animationName: "fade-in-middle",
                    }
                : { opacity: "0" }
            }
            onClick={() => {
              document.body.style.overflow = "hidden"
              setShowModal(!showModal)
              setActiveObject({ ...project })
            }}
            key={index}
          >
            {" "}
            {index === currentProjectIndex && visibile && (
              <motion.span
                initial={{ "--x": "100%" }}
                animate={{ "--x": "-100%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 4,
                  scale: {
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1,
                  },
                }}
                className="linearOverlay"
              ></motion.span>
            )}
            <div className="projectName">
              <span>{project.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
