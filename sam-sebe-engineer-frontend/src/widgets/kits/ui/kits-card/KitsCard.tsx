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
        rounded-[30px] overflow-hidden 
        flex flex-row gap-3 items-center
        text-[#343A40]
        ${active ? "w-full" : "flex-1"}
        ${faded ? "hidden " : "opacity-100 scale-100"}
      `}
    >
      {active && side == "right" && (
        <div className="flex-1 p-4 h-full rounded-[30px] flex items-center">
          <p className=" text-justify font-medium text-[24px] leading-none ">
            {description}
          </p>
        </div>
      )}
      <div className={`items-center flex-1 p-4 flex flex-col gap-3`}>
        <img
          className="object-contain w-full rounded-[22px] "
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          src={image}
        />
        <p className=" text-[24px] font-medium">{title}</p>
      </div>

      {active && side == "left" && (
        <div className="flex-1 p-4 h-full rounded-[30px] flex items-center">
          <p className="text-justify font-medium text-[24px] leading-none ">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};
