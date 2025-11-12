import React from "react";
import { TimerStore } from "../TimerStore";
import AddSelect from "../TagSheet/AddSelect";
import Separator from "../TagSheet/Separator";

const TimeDrawer = () => {
  const selectedTimer = TimerStore((state) => state.selectedTimer);
  const removeTimer = TimerStore((state) => state.removeTimer);
  return (
    <div className="mt-3 w-full max-h-[400px] overflow-y-hidden hidden-scrollbar">
      <AddSelect className="w-full">
        <div className="text-center text-5xl font-semibold text-white mt-3">
          {selectedTimer.length === 0 ? (
            <p className="text-gray-500">No timer selected</p>
          ) : (
            selectedTimer.map((timer, index) => (
              <div
                key={index}
                className="flex justify-center items-center text-white"
              >
                <span>{timer}</span>
                <button
                  onClick={() => removeTimer(index)}
                  className="text-blue-400 cursor-pointer text-xl font-bold px-3"
                >
                  &minus;
                </button>
              </div>
            ))
          )}
        </div>
      </AddSelect>
    </div>
  );
};

export default TimeDrawer;
