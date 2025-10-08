import { KitsCard } from "./ui";
import { kitApi } from "../../entities";
import type { Kit } from "../../entities";
import { useEffect, useState } from "react";

export const Kits = () => {
  const [kits, setKits] = useState<Kit[]>([]);

  useEffect(() => {
    kitApi.getAll().then((allKits) => {
      setKits(allKits);
    });
  }, []);

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
