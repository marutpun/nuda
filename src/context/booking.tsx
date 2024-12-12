import { create } from 'zustand';

interface BookingState {
  checkinDate: string;
  setCheckinDate: (payload: string) => void;
}

export const useBookingStore = create<BookingState>()((set) => ({
  checkinDate: '',
  setCheckinDate: (payload) => set(() => ({ checkinDate: payload })),
}));
