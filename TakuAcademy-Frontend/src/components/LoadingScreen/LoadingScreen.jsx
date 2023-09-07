import React from "react";
import loading from "../../assets/loading/loading.gif";
const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={loading} // Path to your loading GIF
        alt="Loading"
        className="w-90 h-90 mb-2"
      />
      <p className="text-lg text-white">Do you want coffee</p>
    </div>
  );
};

export default LoadingScreen;
