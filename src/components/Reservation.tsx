import { Link } from 'react-router';
import { useBookingStore } from '../context/booking';

export function Reservation() {
  const { checkinDate, checkoutDate, night } = useBookingStore((state) => state);

  // Convert to Date objects
  const checkIn = new Date(checkinDate);
  const checkOut = new Date(checkoutDate);

  // Format the dates as DD/MM/YYYY
  const formattedCheckIn = checkIn.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
  });
  const formattedCheckOut = checkOut.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <aside className="col-12 offset-md-2 col-md-4">
      <div className="card">
        <h2 className="card-header h5">Reservation Info</h2>
        <div className="card-body">
          <p className="card-text">
            {formattedCheckIn} - {formattedCheckOut} <Link to="/">Edit Stay Details</Link>
          </p>
          <p className="card-text">{night} night(s)</p>
        </div>
      </div>
    </aside>
  );
}
