import { Link } from "react-router";
import logo from '../../../public/images/logo.png'

export const Footer = () => {
  return (
    <footer className="w-full py-[16px] bg-[#0F172A] rounded-t-[30px] pt-[32px] flex flex-row gap-3 justify-center text-white">
      <div className="w-[432px] h-full flex flex-row justify-center self-center">
        <h3 className="text-[36px]">Сам Себе Инженер</h3>
        <img className="object-fit h-[64px]" src={logo} alt="" />
      </div>
      <div className="w-[204px]">
        <p className="text-[24px]">Навигация:</p>
        <div className="flex flex-col">
          <span>
            <Link className="font-light" to={`/`}>Главная</Link>
          </span>
          <span>
            <Link className="font-light" to={`/kits`}>Наборы</Link>
          </span>
          <span>
            <Link className="font-light" to={`/instructions`}>Инструкции</Link>
          </span>
          <span>
            <Link className="font-light" to={`/lessons`}>Уроки</Link>
          </span>
        </div>
      </div>
      <div className="w-[204px] text-[24px]">
        <p>help@sse.ru</p>
      </div>
    </footer>
  );
};
