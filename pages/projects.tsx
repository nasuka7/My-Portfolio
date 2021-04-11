import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../types";

const Projects = () => {
  const [ projects, setProjects ] = useState(projectsData);
  const [ active, setActive ] = useState("all")

  const handlerFilterCategory = (category: Category | "all") => {
    if(category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) => 
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div 
      className="px-5 py-2 overflow-y-auto" 
      style={{ height: "65vh" }}
      variants={routeAnimation} 
      initial="initial" 
      animate="animate"
      exit="exit"
      >
      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active}/>

      <motion.div className="grid grid-cols-12 gap-4 my-3 relative"     
          variants={stagger}
          initial="initial"
          animate="animate">
        {projects.map((project) => (
            <motion.div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 rounded-lg"
              variants={fadeInUp}
              key={project.name}
              >
              <ProjectCard project={project} />
            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects;