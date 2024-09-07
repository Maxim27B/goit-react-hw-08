import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <div className={css.linkContainer}>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.active);
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.active);
          }}
        >
          Contacts
        </NavLink>
      </div>
      <div className={css.linkContainer}>
        <NavLink
          to="/register"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.active);
          }}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.active);
          }}
        >
          Log In
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
