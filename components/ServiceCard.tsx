import { FunctionComponent } from "react";
import { IService } from "../types";

const ServiceCard:FunctionComponent<{ service:IService }> = ({
  service: { Icon, about, title },
}) => {

  const createMarcup = () => {
    return {
      __html: about,
    }
  }

  return (
    <div className="flex item-center p-2 space-x-4">
      <Icon  className="w-6 h-6" />
        <div> 
          <h4 className="font-boid">{title}</h4>
          <p dangerouslySetInnerHTML={createMarcup()} />
        </div>
    </div>
  )
}

export default ServiceCard;