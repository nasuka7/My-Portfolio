import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject, AiOutlineCloseSquare } from "react-icons/ai";
import { IProject } from "../types";

// import Image from 'next/image';

const ProjectCard:FunctionComponent<{
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
      <div>
        {/* <Image 
          src={image_path} 
          alt={name} 
          className="cursor-pointer" 
          onClick={() => setShowDetail(true)}
          layout="responsive"
          height="150"
          width="300"
          quality={10}
        /> */}
        <img src={image_path} alt={name} className="cursor-pointer" onClick={() => setShowDetail(true)}/>
        <p className="my-2 text-center">{name}</p>

        {showDetail && (
          <div className="grid md:grid-cols-2 top-0 absolute h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100">
            <div className="flex justify-center my-4 space-x-3">
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
          </div>

            <div>
              <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
              <h3 className="mb-3 font-medium">{description}</h3>
              <div className="flex flex-wrap mt-5 space-x-2 tetx-sm tracking-wider">
                {key_techs.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                  >
                    {tech}  
                  </span>
                ))}
              </div>
            </div>

            <button onClick={() => setShowDetail(false)}
              className="absolute top-3 right-3 rounded-full focus:outline-none dark:bg:dark-200"
              >
              <AiOutlineCloseSquare size={30} />
            </button>
          </div>
        )}
      </div>
    )
}

export default ProjectCard;