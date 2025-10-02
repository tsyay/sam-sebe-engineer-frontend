import { KitsCard } from "./ui";
import { getAllKits } from "../../shared";

export const Kits = () => {

  const kits = getAllKits();

  return (
    <div className="py-[64px] flex flex-col gap-3">
      <h2 className="text-[72px]">Наборы</h2>
      <div className="w-full flex flex-row gap-3 overflow-hidden">
        {kits.map((kit, index) => (
          <KitsCard
            key={index}
            title={kit.title}
            description={kit.shortDescription}
            image={kit.images[0]}
          />
        ))}
      </div>
    </div>
  );
};
