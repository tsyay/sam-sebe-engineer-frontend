import type { ElectronicComponent } from "../../../entities";
import {SmallBadge} from '../../../shared'

interface ComponentBadgeRowProps{
    components: ElectronicComponent[]
}

export const ComponentBadgeRow = ({components} : ComponentBadgeRowProps) => {
  return (
    <div className="w-full flex flex-wrap flex-row gap-1">
      {components &&
        components.map((component, index) => (
          <SmallBadge key={index} title={component.title} color={component.backgroundColor} />
        ))}
    </div>
  );
};
