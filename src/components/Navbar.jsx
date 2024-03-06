import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/auth/actions'; // Pretpostavljamo da ovo već postoji

const Navbar = () => {
  const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn); // Pretpostavka da imate ovo stanje u Redux-u
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    // Ovdje biste mogli dodati logiku za čišćenje lokalnog stanja, redirect, itd.
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Galleries App</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">All Galleries</NavLink>
            </li>
            {isUserLoggedIn ? (
              // Linkovi za ulogovanog korisnika
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/my-galleries">My Galleries</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/create">Create New Gallery</NavLink>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              // Linkovi za neulogovanog korisnika
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">Register</NavLink>
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
