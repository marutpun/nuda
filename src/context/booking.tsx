import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface BookingState {
  checkinDate: string;
  checkoutDate: string;
  setCheckinDate: (payload: string) => void;
  setCheckoutDate: (payload: string) => void;
}

export const useBookingStore = create<BookingState>()(
  devtools((set) => ({
    checkinDate: '',
    checkoutDate: '',
    setCheckinDate: (payload) => set(() => ({ checkinDate: payload }), undefined, 'SET_CHECKIN'),
    setCheckoutDate: (payload) => set(() => ({ checkoutDate: payload }), undefined, 'SET_CHECKOUT'),
  }))
);
