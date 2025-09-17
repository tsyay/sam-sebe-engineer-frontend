import { Button } from "../../shared/ui/buttons";

export const Hero = () => {
  return (
    <>
      <div className="bg-[#2555BF] w-full h-[700px] my-[60px] rounded-[10px] px-[90px] flex flex-col gap-[12px] justify-end pb-[90px] ">
        <h1 className="text-white text-[128px] leading-[110px] font-bold">
          Сам <br /> Себе <br />
          Инженер
        </h1>
        <p className="text-white font-bold">Конструктор для будущих изобретателей</p>
        <div className="flex flex-row gap-[12px]">
          <Button variant="solid">
            <p className="font-bold">Начать конструировать</p>
          </Button>
          <Button variant="transparent">
            <p>Смотреть инструкции</p>
          </Button>
        </div>
      </div>
    </>
  );
};
