import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logoutUser } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand fw-bold" to="/">
        Lee Lab
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          {/* PUBLIC LINKS */}
          <li><Link className="nav-link" to="/people">People</Link></li>
          <li><Link className="nav-link" to="/research">Research</Link></li>
          <li><Link className="nav-link" to="/publications">Publications</Link></li>
          <li><Link className="nav-link" to="/teaching">Teaching</Link></li>
          <li><Link className="nav-link" to="/news">News</Link></li>
          <li><Link className="nav-link" to="/contact">Contact</Link></li>

          {user?.role === "lab" && (
  <li className="nav-item">
    <Link className="nav-link" to="/lab/request-materials">
      Request Materials
    </Link>
  </li>
)}


          {/* ADMIN DROPDOWN */}
          {user?.role === "admin" && (
            <li className="nav-item dropdown">
              <button
                className="btn btn-link text-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                style={{ textDecoration: "none" }}
              >
                Admin Panel
              </button>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/admin/dashboard">Dashboard</Link></li>
                <li><Link className="dropdown-item" to="/admin/people">Manage People</Link></li>
                <li><Link className="dropdown-item" to="/admin/research">Manage Research</Link></li>
                <li><Link className="dropdown-item" to="/admin/publications">Manage Publications</Link></li>
                <li><Link className="dropdown-item" to="/admin/teaching">Manage Teaching</Link></li>
                <li><Link className="dropdown-item" to="/admin/news">Manage News</Link></li>
                <li><Link className="dropdown-item" to="/admin/forms">View Forms</Link></li>
                <li><Link className="dropdown-item" to="/admin/material-requests">Material Requests</Link></li>

                <li>
  <Link className="dropdown-item" to="/admin/users">
    Manage Users
  </Link>
</li>

              </ul>
            </li>
          )}
        </ul>

        {/* RIGHT SIDE LOGIN / USER INFO */}
        <ul className="navbar-nav ms-auto">
          {user ? (
            <>
              <li className="nav-item mt-2 me-3 text-white">
                Hi, {user.name}
              </li>

              <li className="nav-item">
                <button className="btn btn-danger" onClick={logoutUser}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link className="btn btn-primary" to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
