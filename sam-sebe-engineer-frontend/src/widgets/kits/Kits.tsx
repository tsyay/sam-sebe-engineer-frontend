import { KitsCard } from "./ui";
import { getAllKits } from "../../shared/";

export const Kits = () => {
  const kits = getAllKits();  
  return (
    <div className="w-full h-full">
      <div className="w-full h-fit flex flex-col gap-3 overflow-hidden">
        {kits.map((kit, index) => (
          <KitsCard
            key={index}
            kit={kit}
          />
        ))}
      </div>
    </div>
  );
};
