import { KitsCard } from "./ui";
import { useKits} from "../../entities";

export const Kits = () => {
  const { data: kits = [], isLoading, error } = useKits()

  if (isLoading) return <p>Загрузка...</p>
  if (error) return <p>Ошибка загрузки 😢</p>

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
