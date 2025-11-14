import { StateCreator } from "zustand";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TimerState = {
  category: "Work" | "Break";
  resetKey: number;
  selectedTimerString: string | null;
};

export type TimerAction = {
  setCategory: (value: "Work" | "Break") => void;
  incrementResetKey: () => void;
  setSelectedTimerString: (timerString: string | null) => void;
};

export type TimerConfigState = TimerState & TimerAction;

const timerConfigCreator: StateCreator<TimerConfigState> = (set, get) => ({
  addList: [],
  category: "Work",
  resetKey: 0,
  selectedTimerString: null,
  setCategory: (value) => set({ category: value }),

  incrementResetKey: () => set({ resetKey: get().resetKey + 1 }),

  setSelectedTimerString: (timerString) =>
    set({ selectedTimerString: timerString }),
});

export const TimerConfig = create<TimerConfigState>()(
  persist(timerConfigCreator, {
    name: "timer-config-storage",
  })
);

export const useTimerConfig = TimerConfig;
