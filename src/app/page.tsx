import { FC } from "react";
import Header from "@/components/Header";
import VideoSection from "@/components/VideoSection";
import CallToAction from "@/components/CallToAction";
import CalendlyLink from "@/components/CalendlyLink";

const Home: FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col mx-auto w-full px-4 py-8 space-y-10 bg-gray-100">
        <main className="space-y-5">
          <Header />
          <VideoSection />
          <CallToAction />
        </main>
      </div>
      <div id="calendly-container" className="flex flex-col w-full px-4 py-12">
        <CalendlyLink />
      </div>
    </div>
  );
};

export default Home;
