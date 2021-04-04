import { RiComputerLine } from 'react-icons/ri';
import { IProject, IService, ISkill } from './type';
import { BsCircleFill } from 'react-icons/bs'
import { AiOutlineDownCircle } from 'react-icons/ai'

export const services: IService[] = [
  {
    title: "Age",
    about: "21",
    Icon: AiOutlineDownCircle,
  },
  {
    title: "Hometown",
    about: "Tokyo",
    Icon: AiOutlineDownCircle,
  },
  {
    title: "Motto",
    about: "No Attack No Chance",
    Icon: AiOutlineDownCircle,
  },
  {
    title: "Club",
    about: "Ultimate , Baseball",
    Icon: AiOutlineDownCircle,
  },
  {
    title: "Hobby",
    about: "Work out",
    Icon: AiOutlineDownCircle,
  },
  {
    title: "ABC",
    about: "DEF",
    Icon: AiOutlineDownCircle,
  },
]

export const languages: ISkill[] = [
  {
    name:"HTML",
    level:"60%",
    Icon:BsCircleFill
  },
  {
    name:"CSS",
    level:"50%",
    Icon:BsCircleFill
  },
  {
    name:"JavaScript",
    level:"40%",
    Icon:BsCircleFill
  },
  {
    name:"React",
    level:"40%",
    Icon:BsCircleFill
  },
  {
    name:"Next.js",
    level:"40%",
    Icon:BsCircleFill
  },
  {
    name:"TailwindCSS",
    level:"50%",
    Icon:BsCircleFill
  },
]

export const tools: ISkill[] = [
  {
    name:"PhotoShop",
    level:"50%",
    Icon:BsCircleFill
  },
  {
    name:"Illustrator",
    level:"50%",
    Icon:BsCircleFill
  },
  {
    name:"Rhinoceros",
    level:"70%",
    Icon:BsCircleFill
  },
]

export const projects: IProject[] = [
  {
    name: "Twitter Clone",
    description: "Twitterのクローンです。",
    image_path: "",
    deployed_url: "",
    github_url: "",
    categoly: ["react"],
    key_techs: ["React"],
  },
]