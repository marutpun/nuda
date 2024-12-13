import { Link } from 'react-router';
import { useBookingStore } from '../context/booking';
import { UserForm } from '../components/UserForm';
import { Reservation } from '../components/Reservation';

function NoDatesSelected() {
  return (
    <main className="content container">
      <p className="fs-4">No check-in and check-out dates selected. Please go back and select the dates.</p>
      <Link className="link-primary" to="/" rel="home">
        Back
      </Link>
    </main>
  );
}

export default function ReservePage() {
  const { checkinDate, checkoutDate } = useBookingStore((state) => state);

  if (!checkinDate || !checkoutDate) {
    return <NoDatesSelected />;
  }

  return (
    <main className="content container">
      <div className="row">
        <UserForm />
        <Reservation />
      </div>
    </main>
  );
}
