import { JSX } from "react";

const VideoSection = (): JSX.Element => {
  return (
    <div className="max-w-4xl mx-auto mb-12 bg-gray-900 rounded-lg overflow-hidden aspect-video">
      <div className="flex items-center justify-center h-full bg-gradient-to-r from-blue-900 to-blue-700">
        <p className="text-3xl text-white font-bold tracking-wider">
          HOW I GENERATED
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
