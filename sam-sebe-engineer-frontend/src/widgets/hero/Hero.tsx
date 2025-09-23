import { Marquee } from "../../shared/ui";
import { Card } from "./ui";
import kit from "./ui/assets/images/kit.png";
import instructions from "./ui/assets/images/instructions.png";
import lessons from "./ui/assets/images/lessons.png";

export const Hero = () => {
  return (
    <>
      <div className="bg-[#0F172A] w-full h-svh rounded-b-[30px] flex flex-col justify-end pt-[80px]">
        <Marquee
          className="text-[144px] tracking-[-.05em] font-light text-white justify-end leading-none"
          speed="normal"
        >
          СОБИРАЙ 🔧 ПРОГРАММИРУЙ 💻 ИЗОБРЕТАЙ 🚀
        </Marquee>
        <div className="w-[1344px] h-3/4 p-4 flex flex-row gap-3 mx-auto">
          <Card
            title="Наборы"
            to="/kits"
            className="bg-gradient-to-t from-[#153885] to-[#2563EB]"
          >
            <img className="flex-2 max-h-fit" src={kit} />
          </Card>
          <div className="flex-1 flex  h-full flex-col gap-3">
            <Card title="Уроки" to="/lessons" className="">
              <img className="flex-none max-h-40 object-contain self-start" src={lessons} />
            </Card>

            <Card title="Инструкции" to="/instructions" className="bg-[#6AAE55]">
              <img className="flex-none max-h-40 object-contain self-start" src={instructions} />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
