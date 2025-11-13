import React from "react";
import { TimerStore } from "../TimerStore";
import AddSelect from "../TagSheet/AddSelect";
import { useDrawer } from "./Drawer";

const TimeDrawer = () => {
  const { open } = useDrawer();
  const selectedTimers = TimerStore((state) => state.selectedTimers);
  const removeTimer = TimerStore((state) => state.removeTimer);

  if (!open) return null;
  return (
    <div className="mt-3 w-full max-h-[300px] overflow-y-auto hidden-scrollbar">
      <AddSelect className="w-full">
        <div className="text-center text-3xl font-semibold text-white m-3">
          {selectedTimers.length === 0 ? (
            <p className="text-gray-500">No timer selected</p>
          ) : (
            selectedTimers.map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center text-white"
              >
                <span>{item.label}</span>
                <button
                  onClick={() => removeTimer(item.id)}
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
