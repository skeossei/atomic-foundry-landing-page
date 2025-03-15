import { JSX } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import CallToAction from "@/components/CallToAction";

const Home = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <Header />
        <main>
          <Hero />
          <VideoSection />
          <CallToAction />
        </main>
      </div>
    </div>
  );
};

export default Home;
