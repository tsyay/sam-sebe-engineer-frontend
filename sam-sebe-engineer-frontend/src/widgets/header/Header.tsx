import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="w-full h-[60px] bg-white flex flex-row justify-center fixed left-0">
      <div className="w-[1344px] h-full flex flex-row justify-between items-center">
        <div className="logo font-bold text-[20px] opacity-65">
          <h2>Сам Себе Инженер</h2>
        </div>
        <div className="flex flex-row gap-2 font-light">
          <Link to="/">Главная</Link>
          <Link to="/instructions">Инструкции</Link>
          <Link to="/kits">Наборы</Link>
          <Link to="/about">О нас</Link>
        </div>
      </div>
    </header>
  );
};
