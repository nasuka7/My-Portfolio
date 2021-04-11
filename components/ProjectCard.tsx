import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject, AiOutlineCloseSquare } from "react-icons/ai";
import { IProject } from "../types";

import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

const ProjectCard: FunctionComponent<{
  project: IProject
  }> = ({
    project:{
      name,
      image_path,
      deployed_url,
      description,
      github_url,
      key_techs,
    }
  }) => {

    const [ showDetail, setShowDetail ] = useState(false)

    return (
      <motion.div
      variants={stagger}
      initial="initial"
      animate="animate">

        <motion.div variants={fadeInUp}>
          <Image 
            src={image_path} 
            alt={name} 
            className="cursor-pointer" 
            onClick={() => setShowDetail(true)}
            layout="responsive"
            height="150"
            width="300"
            />
          {/* <img src={image_path} alt={name} className="cursor-pointer" onClick={() => setShowDetail(true)}/> */}
        </motion.div>
        <p className="my-2 text-center">{name}</p>

        {showDetail && (
          <div className="grid md:grid-cols-2 top-0 absolute h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100">
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
            <motion.div className="flex justify-center my-4 space-x-3" variants={fadeInUp}>
            <a 
              href={github_url}
              className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
            >
              <AiFillGithub /> <span>Github</span>
            </a>
            <a 
              href={deployed_url}
              className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
            >
              <AiFillProject /> <span>Project</span>
            </a>
          </motion.div>

            <motion.div 
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              <motion.h2 className="mb-3 text-xl font-medium md:text-2xl" variants={fadeInUp}>{name}</motion.h2>
              <motion.h3 className="mb-3 font-medium" variants={fadeInUp}>{description}</motion.h3>
              <motion.div className="flex flex-wrap mt-5 space-x-2 tetx-sm tracking-wider" variants={fadeInUp}>
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

            <button onClick={() => setShowDetail(false)}
              className="absolute top-3 right-3 rounded-full focus:outline-none dark:bg:dark-200"
            >
              <AiOutlineCloseSquare size={30} />
            </button>
          </div>
        )}
      </motion.div>
    )
}

export default ProjectCard;