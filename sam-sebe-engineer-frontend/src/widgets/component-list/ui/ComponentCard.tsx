import { Link } from "react-router";
import type { Component } from "../../../entities";
import { getImageUrl } from "../../../shared";

interface ComponentCardProps {
  component: Component;
}

export const ComponentCard = ({ component }: ComponentCardProps) => {
  return (
    <Link
      to={`/components/${component.componentId}`}
      className={`${component.backgroundColor} flex flex-col items-center gap-3 p-4 rounded-[30px]`}
    >
      <img className="h-[128px]" src={getImageUrl(component.image)} />
      <h3 className="">{component.title}</h3>
    </Link>
  );
};
