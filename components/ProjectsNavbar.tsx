import { FunctionComponent } from "react"
import { Category } from "../types"

export const NavItem: FunctionComponent<{ 
  value: Category | "all",
  handlerFilterCategory: Function,active: string }> = ({
  value,
  handlerFilterCategory,
  active
}) => {
  let className = "capitalize cursor-pointer hover:text-blue-500"
  if(active === value)
    className += "text-blue-500"
    return (
      <li className={className} onClick={() => handlerFilterCategory(value)}>
        {value}
      </li>
    ) 
}


const ProjectsNavbar: FunctionComponent<{handlerFilterCategory: Function,active: string}> = (props) => {
  return (
    <div className="flex space-x-3 list-none overflow-x-auto px-3 py-3">
      <NavItem value="all" {...props}/>
      <NavItem value="react" {...props}/>
      <NavItem value="java" {...props}/>
    </div>
  )
}

export default ProjectsNavbar;