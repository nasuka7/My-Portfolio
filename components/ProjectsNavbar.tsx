import { FunctionComponent } from "react"
import { Category } from "../type"

const NavItem:FunctionComponent<{ value: Category | "all" }> = ({value}) => {
  return (
    <li>
      {value}
    </li>
  ) 
}


const ProjectsNavbar = () => {
  return (
    <div >
      <NavItem value="all" />
      <NavItem value="react" />
    </div>
  )
}

export default ProjectsNavbar