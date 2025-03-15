import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex flex-col items-center justify-center mx-auto w-3/4 space-y-2">
      <h2 className="text-2xl text-blue-900 font-semibold text-center">
        For Consulting Companies ...
      </h2>
      <h1 className="text-3xl md:text-4xl font-semibold text-blue-900 leading-tight text-center">
        How To{" "}
        <span className="text-blue-600 font-extrabold">
          Free Up 20+ Hours a Week
        </span>{" "}
        with AI Automation In{" "}
        <span className="text-blue-600 font-extrabold">30 Days or Less</span>{" "}
        Without Spending Hours on{" "}
        <span className="text-blue-600 font-extrabold">Repetitive Tasks</span>
      </h1>
    </header>
  );
};

export default Header;
