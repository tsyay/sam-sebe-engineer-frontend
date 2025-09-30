import { Link } from "react-router";
import type { ElectronicComponent } from "../../../entities";

interface ComponentCardProps {
  component: ElectronicComponent;
}

export const ComponentCard = ({ component }: ComponentCardProps) => {
  return (
    <Link
      to={`/components/${component.componentId}`}
      className={`${component.backgroundColor} flex flex-col items-center gap-3 p-4 rounded-[30px]`}
    >
      <img className="h-[128px]" src={component.image} />
      <h3 className="">{component.title}</h3>
    </Link>
  );
};
