import { FunctionComponent } from "react";
import { AiFillGithub, AiFillProject, AiOutlineCloseSquare } from "react-icons/ai";
import { IProject } from "../types";

import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail:(id: null | number) => void;
  }> = ({
    project:{
      name,
      image_path,
      deployed_url,
      description,
      github_url,
      key_techs,
      id,
    },
    showDetail,
    setShowDetail,
  }) => {
    return (
      <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      >
        <motion.div 
          variants={fadeInUp} 
          className="border-4 border-gray-500"
        >
          <Image 
            src={image_path} 
            alt={name} 
            className="cursor-pointer" 
            onClick={() => setShowDetail(id)}
            layout="responsive"
            height="150"
            width="300"
          />
          {/* <img src={image_path} alt={name} className="cursor-pointer" onClick={() => setShowDetail(true)}/> */}
        </motion.div>

        <p className="my-2 text-center">{name}</p>

        {showDetail === id && (
          <div className="absolute top-0 left-0 z-10 w-full h-auto p-2 grid text-black bg-gray-100 md:grid-cols-2 md:p-10 gap-x-12 dark:text-white dark:bg-dark-100 rounded-lg">
            <div>
              <Image 
                src={image_path} 
                alt={name} 
                layout="responsive"
                height="150"
                width="300"
              />
              {/* <img
                src={image_path}
                alt={name} 
              /> */}
              <motion.div 
                className="flex justify-center my-4 ml-3" 
                variants={fadeInUp}
              >
                <a 
                  href={github_url}
                  className="flex items-center px-4 py-2 ml-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
                <a 
                  href={deployed_url}
                  className="flex items-center px-4 py-2 ml-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject /> <span>Project</span>
                </a>
              </motion.div>
            </div>

            <motion.div 
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              <motion.h2 className="mb-3 text-xl font-medium md:text-2xl" variants={fadeInUp}>{name}</motion.h2>
              <motion.h3 className="mb-3 font-medium" variants={fadeInUp}>{description}</motion.h3>

              <motion.div className="flex flex-wrap mt-5 ml-2 text-sm tracking-wider" variants={fadeInUp}>
                {key_techs.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                  >
                    {tech}  
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <button 
              onClick={() => setShowDetail(null)}
              className="absolute p-1 bg-gray-200 top-3 right-3 rounded-full focus:outline-none dark:bg:dark-200"
            >
              <AiOutlineCloseSquare size={20} />
            </button>
          </div>
        )}
      </motion.div>
    );
};

export default ProjectCard;