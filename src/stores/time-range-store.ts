import { create } from 'zustand';

interface TimeRangeStore {
  days: string;
  setDays: (days: string) => void;
}

const useTimeRangeStore = create<TimeRangeStore>((set) => ({
  days: '0',
  setDays: (days: string) => set({ days }),
}));

export default useTimeRangeStore;
