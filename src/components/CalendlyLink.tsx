"use client";

import { FC } from "react";
import { InlineWidget } from "react-calendly";

const CalendlyWidget: FC = () => {
  return (
    <div
      id="book-call"
      className="flex flex-col justify-center relative space-y-2 md:space-y-0"
    >
      <h2 className="text-3xl text-blue-600 font-semibold text-center relative z-10">
        Schedule a call with us below 👇
      </h2>
      <InlineWidget
        url="https://calendly.com/sev-keoss/intro-call"
        styles={{
          height: "900px",
          width: "100%",
          minWidth: "320px",
        }}
      />
    </div>
  );
};

export default CalendlyWidget;
