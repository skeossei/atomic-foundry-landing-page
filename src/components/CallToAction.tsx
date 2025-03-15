"use client";

import { FC } from "react";

const CallToAction: FC = () => {
  const scrollToCalendly = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document
      .getElementById("calendly-container")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-lg mb-4 text-gray-600">
        {"Automate Your Business Operations\nWithout Lifting A Finger!"}
      </p>
      <a
        href="#book-call"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-full transition-colors duration-500 shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer"
        onClick={scrollToCalendly}
      >
        Book A Call
      </a>
    </div>
  );
};

export default CallToAction;
