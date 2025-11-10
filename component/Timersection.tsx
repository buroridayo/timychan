"use client";
import AddSelect from "@/utils/AddSelect";
import Separator from "@/utils/Separator";
import TimerSelect from "@/utils/TimerSelect";
import { useState } from "react";
import * as React from "react";
import toast from "react-hot-toast";

const Timersection = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [addList, setAddList] = useState<string[]>([]);

  // reset
  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setResetKey((prev) => prev + 1);
  };

  // add
  const handleAdd = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      toast.error("0h0m0s cannot add");
      return;
    }
    const totalTime = `${hours}h ${minutes}m ${seconds}s`;
    setAddList((prev) => [...prev, totalTime]);
    toast.success(`Add: ${totalTime}`);
    console.log("selecttime", totalTime);
  };

  //Delete list
  const handleDelete = (index: number) => {
    const totalTime = `${hours}h ${minutes}m ${seconds}s`;
    setAddList((prev) => prev.filter((_, i) => i !== index));
    toast.success(`Delete:${totalTime}`);
  };

  return (
    <div className="flex flex-col items-center bg-black px-4 py-6 sm:p-10 rounded-3xl text-white w-full max-w-screen-sm mx-auto max-h-full shrink-0 mt-20 sm:mt-20">
      <div className="flex flex-col justify-center items-center gap-3 w-full">
        <div className="flex gap-3 sm:gap-6">
          <TimerSelect
            label="h"
            value={hours}
            onchange={setHours}
            range={24}
            resetTrigger={resetKey}
          />
          <TimerSelect
            label="m"
            value={minutes}
            onchange={setMinutes}
            range={60}
            resetTrigger={resetKey}
          />
          <TimerSelect
            label="s"
            value={seconds}
            onchange={setSeconds}
            range={60}
            resetTrigger={resetKey}
          />
        </div>

        {/* Button (Reset/Add) */}
        <div className="flex flex-col gap-2 sm:mt-1">
          <button
            onClick={handleReset}
            className="text-white text-base sm:text-xl rounded-xl outline outline-white px-4 py-2 active:bg-cyan-500"
          >
            Reset
          </button>
          <button
            onClick={handleAdd}
            className="text-white text-base sm:text-xl rounded-xl outline outline-white px-4 py-2 active:bg-fuchsia-700"
          >
            Add
          </button>
        </div>
      </div>

      <div className="mt-6 w-full max-h-[200px] overflow-y-auto hidden-scrollbar">
        <AddSelect className="w-full">
          <div className="p-4 text-center">
            <h4 className="mb-4 text-xl font-medium text-white">TimeList</h4>
            {addList.map((list, index) => (
              <React.Fragment key={index}>
                <div className="flex justify-between items-center text-lg text-white">
                  <span>{list}</span>
                  <span
                    onClick={() => handleDelete(index)}
                    className="text-blue-400 hover:text-blue-900 cursor-pointer text-xl font-bold px-2"
                    aria-label="Delete timer"
                  >
                    &minus;
                  </span>
                </div>

                <Separator className="my-2" />
              </React.Fragment>
            ))}
          </div>
        </AddSelect>
      </div>
    </div>
  );
};

export default Timersection;
