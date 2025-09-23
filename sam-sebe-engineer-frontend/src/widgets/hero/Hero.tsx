import { Marquee } from "../../shared/ui";
import { Card } from "./ui";
import kit from "./ui/assets/images/kit.png";
import instructions from "./ui/assets/images/instructions.png";
import lessons from "./ui/assets/images/lessons.png";

export const Hero = () => {
  return (
    <>
      <div className="bg-[#0F172A] w-full h-svh rounded-b-[30px] flex flex-col justify-start pt-[80px]">
        <Marquee className="text-[96px] tracking-[-.075em] font-medium text-white justify-end leading-none">
          СОБИРАЙ 🔧 ПРОГРАММИРУЙ 💻 ИЗОБРЕТАЙ 🚀
        </Marquee>
        <div className="w-full h-full p-4 flex flex-row gap-3 mx-auto">

          <Card title="Наборы" to="/kits" className="bg-gradient-to-t from-[#153885] to-[#2563EB]">
            <img className="flex-grow object-cover w-full" src={kit} />
          </Card>

          <div className="flex-1 flex h-full flex-col gap-3">

            <Card title="Уроки" to="/lessons">
              <img
                className="flex-none max-h-50 object-contain self-start"
                src={lessons}
              />
            </Card>

            <Card title="Инструкции" to="/instructions" className="bg-[#6AAE55]">
              <img
                className="flex-none max-h-50 object-contain self-start"
                src={instructions}
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
