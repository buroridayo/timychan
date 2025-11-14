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

  //TimerDrawer transplant
  addSavedTimer: (label: string) => void;
  removeSavedTimer: (index: number) => void;
};

const generateUniqueId = () => {
  if (
    typeof window !== "undefined" &&
    window.crypto &&
    window.crypto.randomUUID
  ) {
    return window.crypto.randomUUID();
  }
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
};

export const TimerStore = create<TimerState>()(
  persist(
    (set, get) => ({
      selectedTimers: [],
      addList: [],
      addTimer: (label) =>
        set((state) => ({
          selectedTimers: [
            ...state.selectedTimers,
            { id: generateUniqueId(), label },
          ],
        })),
      removeTimer: (id) =>
        set((state) => ({
          selectedTimers: state.selectedTimers.filter((item) => item.id !== id),
        })),
      setAddList: (list) => set({ addList: list }),
      addSavedTimer: (label) => {
        set((state) => ({ addList: [...state.addList, label] }));
      },
      removeSavedTimer: (index) => {
        const current = get().addList;
        if (index >= 0 && index < current.length) {
          const updated = current.filter((_, i) => i !== index);
          set({ addList: updated });
        }
      },
    }),
    {
      name: "Timer-storage",
    }
  )
);
