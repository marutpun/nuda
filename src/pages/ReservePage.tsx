import { Link } from 'react-router';
import { useBookingStore } from '../context/booking';

export default function ReservePage() {
  const { checkinDate, checkoutDate } = useBookingStore((state) => state);

  if (!checkinDate || !checkoutDate) {
    return (
      <main className="content container">
        <p className="fs-4">No check-in and check-out dates selected. Please go back and select the dates.</p>
        <Link className="link-primary" to="/" rel="home">
          Back
        </Link>
      </main>
    );
  }

  return (
    <main className="content container">
      <h2>Your information</h2>
    </main>
  );
}
