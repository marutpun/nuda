import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-day-picker/style.css';
import { Routes, Route } from 'react-router';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import IndexPage from './pages/IndexPage';
import ReservePage from './pages/ReservePage';
import ConfirmPage from './pages/ConfirmPage';

export default function App() {
  return (
    <div className="grid-app" role="presentation">
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/reserve" element={<ReservePage />} />
        <Route path="/thank-you" element={<ConfirmPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
