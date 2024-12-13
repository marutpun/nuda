import { useState } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { calculateNights } from '../utils';
import { useBookingStore } from '../context/booking';
import { useNavigate } from 'react-router';

export function DatePicker() {
  const navigate = useNavigate();
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  const { checkinDate, checkoutDate, setCheckinDate, setCheckoutDate } = useBookingStore((state) => state);

  const rangeOneNight: DateRange = {
    from: checkinDate ? new Date(checkinDate) : new Date(), // Fallback to current date if not available
    to: checkoutDate ? new Date(checkoutDate) : new Date(), // Fallback to current date if not available
  };

  const _handleClickReserve = () => {
    if (selectedRange && selectedRange.from && selectedRange.to) {
      setCheckinDate(selectedRange.from.toISOString());
      setCheckoutDate(selectedRange.to.toISOString());
    }
    navigate('/reserve');
  };

  return (
    <div className="d-flex flex-column gap-2">
      <DayPicker
        numberOfMonths={2}
        mode="range"
        min={1}
        max={6}
        selected={selectedRange || rangeOneNight}
        onSelect={setSelectedRange}
        disabled={{ before: new Date() }}
        footer={
          selectedRange && selectedRange.from && selectedRange.to
            ? `${selectedRange.from.toLocaleDateString('en-GB', {
                day: 'numeric',
              })} - ${selectedRange.to.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}. Total ${calculateNights(selectedRange)} night(s)`
            : 'Please select date. Maximum 6 nights'
        }
      />
      <button className="btn btn-primary align-self-center" disabled={!selectedRange || !selectedRange.from || !selectedRange.to} style={{ width: 'auto' }} onClick={_handleClickReserve}>
        Book {calculateNights(selectedRange)} night(s)
      </button>
    </div>
  );
}
