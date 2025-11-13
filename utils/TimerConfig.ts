import { create } from "zustand";
import { persist } from "zustand/middleware";

type TimerConfigState = {
  addList: string[];
  category: "Work" | "Break";
  resetKey: number;
  setAddList: (list: string[]) => void;
  addToAddList: (item: string) => void;
  deleteFromAddList: (index: number) => void;
  setCategory: (value: "Work" | "Break") => void;
  incrementResetKey: () => void;
};

export const TimerConfig = create<TimerConfigState>()(
  persist(
    (set, get) => ({
      addList: [],
      category: "Work",
      resetKey: 0,

      setAddList: (list) => set({ addList: list }),

      addToAddList: (item) => set({ addList: [...get().addList, item] }),

      deleteFromAddList: (index) => {
        const current = get().addList;
        if (index >= 0 && index < current.length) {
          const updated = current.filter((_, i) => i !== index);
          set({ addList: updated });
        }
      },

      setCategory: (value) => set({ category: value }),

      incrementResetKey: () => set({ resetKey: get().resetKey + 1 }),
    }),
    {
      name: "timer-config-storage",
    }
  )
);
