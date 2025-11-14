import React from "react";
import { TimerStore } from "../TimerStore";
import { useDrawer } from "./Drawer";
import { TimerConfig } from "../TimerConfig";
import { useShallow } from "zustand/shallow";

const TimeDrawer = () => {
  const selectedTimers = TimerStore((state) => state.selectedTimers);
  const removeTimer = TimerStore((state) => state.removeTimer);
  const { open } = useDrawer();

  const addList = TimerStore((state) => state.addList);

  const { selectedTimerString, setSelectedTimerString } = TimerConfig(
    useShallow((state) => ({
      selectedTimerString: state.selectedTimerString,
      setSelectedTimerString: state.setSelectedTimerString,
    }))
  );

  if (!open) return null;

  return (
    <div className="mt-3 w-full max-h-[300px] overflow-y-auto hidden-scollbar">
      <div className="text-3xl font-semibold text-white m-3 pt-2">
        <h3 className="text-xl mb-2 border-b border-gray-400 pb-2">
          Running Timer
        </h3>
        {selectedTimers.length === 0 ? (
          <p className="text-gray-500 text-center">No timer selected</p>
        ) : (
          selectedTimers.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-full text-white text-lg py-1"
            >
              <div className="font-medium">{item.label}</div>
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
      <div className="text-xl font-semibold text-white m-3 border-b border-gray-400 pb-2">
        <h3 className="mb-2">Latest List</h3>
        {addList.length === 0 ? (
          <p className="text-gray-500 text-center text-base">No Saved Timer</p>
        ) : (
          <div className="flex flex-col gap-1">
            {addList.map((list, index) => {
              const isSelected = list === selectedTimerString;
              return (
                <div
                  key={index}
                  onClick={() =>
                    setSelectedTimerString(isSelected ? null : list)
                  }
                  className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors text-base ${
                    isSelected ? `bg-indigo-600` : `hover:bg-gray-700`
                  }`}
                >
                  <span className="font-medium">{list}</span>
                  {isSelected && (
                    <span className="text-white text-lg font-bold">✓</span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeDrawer;
