interface TargetCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export const TargetCard = ({
  title,
  description,
  image,
  className,
}: TargetCardProps) => {
  return (
    <div
      className={`${className} group relative flex flex-col items-center cursor-pointer text-[#343A40]`}
    >
      <div className="w-full h-[650px] overflow-hidden rounded-[30px] relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
          <p className="text-white text-[24px] leading-[24px] font-light text-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            {description}
          </p>
        </div>
      </div>
      <h3 className="mt-4 text-center text-[24px] font-bold group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
    </div>
  );
};
