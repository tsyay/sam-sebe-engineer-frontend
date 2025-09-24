interface KitsCardProps {
  title: string;
  description: string;
  image: string;
  active: boolean;
  faded: boolean;
  onHover: () => void;
  onLeave: () => void;
  side?: "left" | "right";
}

export const KitsCard = ({
  title,
  description,
  image,
  active,
  faded,
  onHover,
  onLeave,
  side = "left",
}: KitsCardProps) => {
  return (
    <div
      className={`
        rounded-[30px] bg-[#6AAE55] overflow-hidden 
        flex flex-row gap-3 items-center
        drop-shadow-lg
        ${active ? "w-full" : "flex-1"}
        ${faded ? "scale-0 hidden " : "opacity-100 scale-100"}
      `}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {active && side == "right" && (
        <div className="flex-1 p-4">
          <p className="text-white text-justify font-medium text-[24px] leading-none">{description}</p>
        </div>
      )}
      <div className={`items-center flex-1 p-4 flex flex-col gap-3`}>
        <img className="object-contain w-full rounded-[22px]" src={image} />
        <p className="text-white text-[24px] font-bold">{title}</p>
      </div>

      {active && side == "left" && (
        <div className="flex-1 p-4">
          <p className="text-white text-justify font-medium text-[24px] leading-none">{description}</p>
        </div>
      )}
    </div>
  );
};
