import { FC } from "react";

const CalendlyWidget: FC = () => {
  return (
    <div
      id="book-call"
      className="flex flex-col justify-center relative space-y-2 md:space-y-0"
    >
      <h2 className="text-3xl text-blue-600 font-semibold text-center relative z-10">
        Schedule a call with us below 👇
      </h2>
      <div
        className="calendly-inline-widget min-w-[320px] h-[900px] fit-content overflow-hidden md:absolute md:top-[calc(-1.5vw-20px)]"
        data-url="https://calendly.com/sev-keoss/intro-call"
      />
    </div>
  );
};

export default CalendlyWidget;
