import { Carousell } from '../components/Carousell';
import { DatePicker } from '../components/DatePicker';
import { TermNCond } from '../components/TermNCond';

export default function IndexPage() {
  return (
    <main className="content container">
      <Carousell />
      <div className="mt-5">
        <DatePicker />
      </div>
      <TermNCond />
    </main>
  );
}
