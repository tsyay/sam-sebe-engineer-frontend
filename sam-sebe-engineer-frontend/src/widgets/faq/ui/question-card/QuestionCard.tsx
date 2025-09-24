import { useState } from "react";

interface QuestionCardProps {
  question: string;
  answer: string;
}

export const QuestionCard = ({ question, answer }: QuestionCardProps) => {
  const [visability, setVisablity] = useState(false);

  const handleClick = () => {
    setVisablity(!visability);
  };

  return (
    <div
      className="w-3/4 h-fit p-4 bg-white flex flex-col mx-auto rounded-[30px] drop-shadow-md"
      onClick={handleClick}
    >
      <div>
        <p className="text-[32px] font-medium">{question}</p>
      </div>
      <div className={`${visability ? "flex" : "hidden"}`}>
        <p className="text-[24px] leading-[24px] font-light text-justify">{answer}</p>
      </div>
    </div>
  );
};
