import { useState } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import 'react-day-picker/style.css';

export function DatePicker() {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  const rangeOneNight: DateRange = {
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 1)),
  };

  // Calculate nights only if both `from` and `to` are defined
  const calculateNights = () => {
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

  return (
    <div className="d-flex flex-column gap-2">
      <DayPicker
        mode="range"
        min={1}
        max={5}
        selected={selectedRange || rangeOneNight}
        onSelect={setSelectedRange}
        disabled={{ before: new Date() }}
        footer={
          selectedRange && selectedRange.from && selectedRange.to
            ? `${selectedRange.from.toLocaleDateString('en-GB', {
                day: '2-digit',
              })} - ${selectedRange.to.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}. Total ${calculateNights()} night(s)`
            : 'Please select date. (Maximum 5 nights)'
        }
      />
      <button className="btn btn-primary" disabled={!selectedRange || !selectedRange.from || !selectedRange.to}>
        Book {calculateNights()} night(s)
      </button>
    </div>
  );
}
