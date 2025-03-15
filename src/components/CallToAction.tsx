import { JSX } from "react";

const CallToAction = (): JSX.Element => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-lg mb-8 text-gray-600">
        Fill Your Calendar With Qualified
        <br />
        Leads Without Lifting A Finger!
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
        Book A Call
      </button>
    </div>
  );
};

export default CallToAction;
