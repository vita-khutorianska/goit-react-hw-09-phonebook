import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../Redux/Auth/auth_selector';

const Navigation = () => {
  const isLoginOn = useSelector(state => getIsAuthenticated(state));
  return (
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
};

export default Navigation;
