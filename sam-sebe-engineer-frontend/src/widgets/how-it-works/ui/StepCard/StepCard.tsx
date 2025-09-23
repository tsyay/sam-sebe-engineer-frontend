interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
}

export const StepCard = ({ stepNumber, title, description }: StepCardProps) => {
  return (
    <div className="text-[#343A40] flex flex-row items-center">
      <div  className="text-[84px] w-[84px] text-center">
        <h2 className="">{stepNumber}</h2>
      </div>
      <div className="leading-[36px] ">
        <h3 className="text-[36px] ">{title}</h3>
        <p className="text-[24px] font-light">{description}</p>
      </div>
    </div>
  );
};
