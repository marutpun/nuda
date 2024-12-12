import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-day-picker/style.css';
import './App.css';
import { Header } from './components/Header';
import { Carousell } from './components/Carousell';
import { DatePicker } from './components/DatePicker';
import { TermNCond } from './components/TermNCond';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="grid-app" role="presentation">
      <Header />
      <main className="content container">
        <Carousell />
        <div className="mt-5">
          <DatePicker />
        </div>
        <TermNCond />
      </main>
      <Footer />
    </div>
  );
}
