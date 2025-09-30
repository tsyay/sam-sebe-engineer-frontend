import { useState } from "react";

interface CollapsibleProps {
  className?: string;
  children: React.ReactNode;
  title?: string
}

export const Collapsible = ({ className,children, title }: CollapsibleProps) => {
  const [visability, setVisablity] = useState(false);

  const handleClick = () => {
    setVisablity(!visability);
  };

  return (
    <div className={className} onClick={handleClick}>
      <div>
        <p className="text-[32px] font-medium">{title}</p>
      </div>
      <div className={`${visability ? "flex" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
};
