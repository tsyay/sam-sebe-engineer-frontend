import { KitsCard } from "./ui";
import { kitApi, useKits } from "../../entities";
import { Navigate } from "react-router";

export const Kits = () => {
  const { data: kits, isLoading, error, refetch } = useKits();

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки данных 😢</p>;
  if (!kits) return <Navigate to="/404" replace />;
  return (
    <div className="py-[64px] flex flex-col gap-3">
      <h2 className="text-[72px]">Наборы</h2>
      <div className="w-full flex flex-row gap-3 overflow-hidden">
        {kits.map((kit, index) => (
          <KitsCard
            key={index}
            title={kit.title}
            description={kit.shortDescription}
            image={kit.images}
          />
        ))}
      </div>
    </div>
  );
};
