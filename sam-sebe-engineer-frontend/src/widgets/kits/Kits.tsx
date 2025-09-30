import { useState } from "react";
import { KitsCard } from "./ui";
import { getAllKits } from "../../shared/";

export const Kits = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const kits = getAllKits();
  
  return (
    <div className="w-full h-full mt-[80px] mb-[40px] drop-shadow-lg bg-white p-6 rounded-[30px]">
      <h2 className="text-[72px]">Наборы</h2>
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
