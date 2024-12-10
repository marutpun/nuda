import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import { Carousell } from './components/Carousell';
import { DatePicker } from './components/DatePicker';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="grid-app" role="presentation">
      <Header />
      <main className="content container">
        <Carousell />
        <div className="mt-5 d-flex flex-wrap flex-row justify-content-center">
          <DatePicker />
        </div>
      </main>
      <Footer />
    </div>
  );
}
