import { KitsCard } from "./ui";
import { kitApi, type Kit } from "../../entities";
import { useEffect, useState } from "react";

export const Kits = () => {
  const [kits, setKits] = useState<Kit[]>([]);

  useEffect(() => {
    kitApi.getAll().then((allKits) => {
      setKits(allKits);
    });
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full h-fit flex flex-col gap-3 overflow-hidden">
        {kits.map((kit, index) => (
          <KitsCard key={index} kit={kit} />
        ))}
      </div>
    </div>
  );
};
