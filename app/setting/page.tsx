import First from "@/component/First";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-between">
      <div className="text-2xl m-5 text-white">
        <h1>Setting</h1>
      </div>
      <First />
    </div>
  );
};

export default page;
