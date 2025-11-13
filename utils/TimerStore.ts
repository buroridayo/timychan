import { create } from "zustand";
import { persist } from "zustand/middleware";

//timer management
type TimerItem = {
  id: string;
  label: string;
};

type TimerState = {
  selectedTimers: TimerItem[];
  addList: string[];
  addTimer: (label: string) => void;
  removeTimer: (id: string) => void;
  setAddList: (list: string[]) => void;
};

export const TimerStore = create<TimerState>()(
  persist(
    (set) => ({
      selectedTimers: [],
      addList: [],
      addTimer: (label) =>
        set((state) => ({
          selectedTimers: [
            ...state.selectedTimers,
            { id: crypto.randomUUID(), label },
          ],
        })),
      removeTimer: (id) =>
        set((state) => ({
          selectedTimers: state.selectedTimers.filter((item) => item.id !== id),
        })),
      setAddList: (list) => set({ addList: list }),
    }),
    {
      name: "Timer-storage",
    }
  )
);
