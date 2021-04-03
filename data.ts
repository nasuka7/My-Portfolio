import { RiComputerLine } from 'react-icons/ri';
import { IService, ISkill } from './type';
import { BsCircleFill } from 'react-icons/bs'

export const services: IService[] = [
  {
    title: "Fronted Dev",
    about: "Lorem",
    Icon:RiComputerLine,
  },
  {
    title: "title",
    about: "Lorem",
    Icon:RiComputerLine,
  },
  {
    title: "title",
    about: "Lorem",
    Icon:RiComputerLine,
  },
  {
    title: "title",
    about: "Lorem",
    Icon:RiComputerLine,
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