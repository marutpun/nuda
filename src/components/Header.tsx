import { Link } from 'react-router';

export function Header() {
  return (
    <header className="header">
      <div className="py-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-column flex-wrap align-items-start justify-content-start">
            <Link to="/" className="link-body-emphasis text-decoration-none">
              <h1 className="h6 fw-bold mb-0 mb-md-2">Nuda Pool Villa</h1>
            </Link>
            <p className="mb-0">Immerse yourself in the natural beauty and serenity</p>
          </div>
        </div>
      </div>
    </header>
  );
}
