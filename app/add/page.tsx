import AddButton from "@/component/AddButton";
import First from "@/component/First";
import Timersection from "@/component/Timersection";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div className="text-2xl m-5 text-black">
        <h1>Add</h1>
      </div>
      <Timersection />
      <AddButton />
      <First />
    </div>
  );
};

export default page;
