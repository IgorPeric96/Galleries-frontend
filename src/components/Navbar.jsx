import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/auth/actions';
import { selectIsUserLoggedIn } from '../store/auth/selectors'; 
const Navbar = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn); 
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    // dodati dodatnu logiku nakon odjave, da ocisti local storage ili redirect.
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Galleries App</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">All Galleries</Link>
          </li>
          {isUserLoggedIn ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/my-galleries">My Galleries</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create New Gallery</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
