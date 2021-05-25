import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../Redux/Auth/auth_selector';

const Navigation = ({ isLoginOn }) => (
  <nav className={styles.nav}>
    <NavLink
      exact
      to="/homepage"
      className={styles.link}
      activeClassName={styles.activeLink}
    ></NavLink>

    {isLoginOn && (
      <NavLink
        to="/contacts"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isLoginOn: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
