export const Navbar = ({ setCategory }) => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
        <button className="navbar-brand" onClick={() => setCategory("")}>
          <span className="badge bg-light text-dark fs-4">News Magzeee</span>
        </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link active cursor-pointer" onClick={() => setCategory("technology")} style={{ cursor: 'pointer' }}>Technology</div>
              </li>
              <li className="nav-item">
                <div className="nav-link active cursor-pointer" onClick={() => setCategory("business")} style={{ cursor: 'pointer' }}>Business</div>
              </li>
              <li className="nav-item">
                <div className="nav-link active cursor-pointer" onClick={() => setCategory("health")} style={{ cursor: 'pointer' }}>Health</div>
              </li>
              <li className="nav-item">
                <div className="nav-link active cursor-pointer" onClick={() => setCategory("science")} style={{ cursor: 'pointer' }}>Science</div>
              </li>
              <li className="nav-item">
                <div className="nav-link active cursor-pointer" onClick={() => setCategory("general")} style={{ cursor: 'pointer' }}>General</div>
              </li>
              <li className="nav-item">
                <div className="nav-link active cursor-pointer" onClick={() => setCategory("sports")} style={{ cursor: 'pointer' }}>Sports</div>
              </li>
              <li className="nav-item">
                <div className="nav-link active cursor-pointer" onClick={() => setCategory("entertainment")} style={{ cursor: 'pointer' }}>Entertainment</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  