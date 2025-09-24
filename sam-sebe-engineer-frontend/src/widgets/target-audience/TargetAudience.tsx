import child from "./ui/assets/images/child.png";
import teenager from "./ui/assets/images/teenager.png";
import teacher from "./ui/assets/images/teacher.png";
import { TargetCard } from "./ui";

export const TargetAudience = () => {
const Audience = [
  {
    title: "Детям",
    description: "Волшебный старт в мир технологий: первые изобретения, которые зажигают искру интереса к инженерии и творчеству",
    image: child,
  },
  {
    title: "Подросткам",
    description: "Площадка для экспериментов: создавай, программируй, тестируй свои идеи и превращай их в работающие прототипы",
    image: teenager,
  },
  {
    title: "Учителям", 
    description: "Надежный помощник в организации увлекательных занятий, где каждый ученик становится юным инженером-изобретателем",
    image: teacher,
  },
];

  return (
    <div className="w-full h-fit py-[64px]">
      <h2 className="text-[72px]">Для кого?</h2>
      <div className="w-full flex flex-row gap-3">
        {Audience.map((person, index) => (
          <TargetCard
            key={index}
            className="flex-1"
            title={person.title}
            description={person.description}
            image={person.image}
          />
        ))}
      </div>
    </div>
  );
};
