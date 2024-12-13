import { DateRange } from 'react-day-picker';

export const calculateNights = (selectedRange: DateRange | undefined) => {
  if (selectedRange && selectedRange.from && selectedRange.to) {
    const fromDate = new Date(selectedRange.from);
    fromDate.setHours(0, 0, 0, 0);

    const toDate = new Date(selectedRange.to);
    toDate.setHours(0, 0, 0, 0);

    const timeDiff = toDate.getTime() - fromDate.getTime();
    const nights = timeDiff / (1000 * 60 * 60 * 24);

    return Math.floor(nights);
  }
  return 0; // Default to 0 if no range is selected
};
