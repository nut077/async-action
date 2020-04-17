import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../auth';
import './Header.scss';

const Header = ({ isLoggedIn, logout }) => (
  <header className="headerMenu">
    <Link to="/articles" className="nav-link">
      Articles
    </Link>
    {isLoggedIn ? (
      <div className="auth">
        <Link to="/" className="nav-link" onClick={logout}>
          Logout
        </Link>
      </div>
    ) : (
      <div className="auth">
        <Link to="/login" className="auth-link">
          Signin
        </Link>
        <Link to="/signup" className="auth-link">
          Signup
        </Link>
      </div>
    )}
  </header>
);

export default connect(
  ({ auth }) => ({
    isLoggedIn: !!auth.token,
  }),
  { logout }
)(Header);
