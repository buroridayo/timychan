import { create } from "zustand";

//timer management
type TimeState = {
  selectedTimer: string[];
  addTimer: (value: string) => void;
  removeTimer: (index: number) => void;
  clearTimers: () => void;
};

export const TimerStore = create<TimeState>((set) => ({
  selectedTimer: [],
  addTimer: (value) =>
    set((state) => ({ selectedTimer: [...state.selectedTimer, value] })),
  removeTimer: (index) =>
    set((state) => ({
      selectedTimer: state.selectedTimer.filter((_, i) => i !== index),
    })),
  clearTimers: () => set({ selectedTimer: [] }),
}));
