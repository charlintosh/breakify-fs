export default function App() {
  return (
    <div className="app">
      <div className="content">
        <div className="breakified"></div>
        <div className="row">
          <div className="col">
            <label>First Name</label>
            <input name="firstName" />
          </div>
          <div className="col">
            <label>Last Name</label>
            <input name="lastName" />
          </div>
        </div>
        <button>Breakify</button>
      </div>
    </div>
  );
}
