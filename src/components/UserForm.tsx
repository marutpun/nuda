import { useBookingStore } from '../context/booking';

export function UserForm() {
  const { name, lastName, email, phone, setName, setLastName, setEmail, setPhone } = useBookingStore((state) => state);

  return (
    <main className="col-12 offset-md-1 col-md-4">
      <div className="card">
        <h2 className="card-header h5">Your Info</h2>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input type="text" className="form-control" id="firstName" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input type="text" className="form-control" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail address
              </label>
              <input type="email" className="form-control" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="telephone" className="form-label">
                Telephone number
              </label>
              <input type="text" className="form-control" id="telephone" value={phone} onChange={(event) => setPhone(event.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">
              Reserve
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
