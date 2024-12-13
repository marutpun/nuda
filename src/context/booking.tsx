import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface BookingState {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  checkinDate: string;
  checkoutDate: string;
  night: number;
  setName: (payload: string) => void;
  setLastName: (payload: string) => void;
  setEmail: (payload: string) => void;
  setPhone: (payload: string) => void;
  setCheckinDate: (payload: string) => void;
  setCheckoutDate: (payload: string) => void;
  setNight: (payload: number) => void;
}

export const useBookingStore = create<BookingState>()(
  devtools((set) => ({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    checkinDate: '',
    checkoutDate: '',
    night: 0,
    setName: (payload) => set({ name: payload }, undefined, 'SET_NAME'),
    setLastName: (payload) => set({ lastName: payload }, undefined, 'SET_LASTNAME'),
    setEmail: (payload) => set({ email: payload }, undefined, 'SET_EMAIL'),
    setPhone: (payload) => set({ phone: payload }, undefined, 'SET_PHONE'),
    setCheckinDate: (payload) => set({ checkinDate: payload }, undefined, 'SET_CHECKIN'),
    setCheckoutDate: (payload) => set({ checkoutDate: payload }, undefined, 'SET_CHECKOUT'),
    setNight: (payload) => set({ night: payload }),
  }))
);
