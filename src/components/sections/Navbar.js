import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const Navbar = () => {
  const { users, handleSignOut } = useAuth();
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h4>
            <span className="text-warning fw-bold">Firebase</span>{" "}
            Authentication
          </h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item px-4">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {users?.email ? (
              <li className="nav-item px-4">
                <button
                  type="button"
                  className="btn btn-danger px-5 rounded-5"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item px-4">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item px-4">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
