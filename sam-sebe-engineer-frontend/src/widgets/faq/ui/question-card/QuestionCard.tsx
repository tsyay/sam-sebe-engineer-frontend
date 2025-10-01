import { Collapsible } from "../../../../shared";

interface QuestionCardProps {
  question: string;
  answer: string;
}

export const QuestionCard = ({ question, answer }: QuestionCardProps) => {
  return (
    <Collapsible
      className="w-3/4 h-fit bg-white flex flex-col mx-auto "
      title={question}
    >
      <p className="text-[24px] leading-[24px] font-light text-justify">
        {answer}
      </p>
    </Collapsible>
  );
};
