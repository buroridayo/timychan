import First from "@/component/First";
import Timersection from "@/component/Timersection";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col overflow-hidden">
      <div className="text-2xl m-5 text-white shrink-0">
        <h1>Add</h1>
      </div>
      <div className="flex-1 flex items-start justify-center shrink-0">
        <Timersection />
      </div>
      <div className="shrink-0">
        <First />
      </div>
    </div>
  );
};

export default page;
