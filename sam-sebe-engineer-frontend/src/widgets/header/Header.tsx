import { Link } from "react-router";

export const Header = () => {
  return (
    <div className="fixed top-2 left-0 right-0 px-2 z-50">
      <header className="w-full h-[60px] bg-white rounded-[30px]">
        <div className="w-full h-full flex flex-row justify-between items-center max-w-[1344px] mx-auto px-6">
          <div className="logo font-bold text-2xl opacity-65">
            <h2>СамСебеИнженер</h2>
          </div>
          <div className="flex flex-row gap-4 font-extralight">
            <Link to="/">Главная</Link>
            <Link to="/instructions">Инструкции</Link>
            <Link to="/kits">Наборы</Link>
            <Link to="/about">О нас</Link>
          </div>
          <div className="flex flex-row gap-2">
            <Link to="/login">Войти</Link>
            <Link to="/register">Зарегистрироваться</Link>
          </div>
        </div>
      </header>
    </div>
  );
};
