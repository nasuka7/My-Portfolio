import { FunctionComponent } from "react";
import { Service } from "../types";

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, about, title },
}) => {

  const createMarcup = () => {
    return {
      __html: about,
    }
  }

  return (
    <div className="flex p-2 space-x-4">
      <Icon  className="w-5 h-5 ml-3 mt-1" />
        <div> 
          <h4 className="font-bold -ml-2">{title}</h4>
          <p className="ml-1 mt-1" dangerouslySetInnerHTML={createMarcup()} />
        </div>
    </div>
  )
}

export default ServiceCard;