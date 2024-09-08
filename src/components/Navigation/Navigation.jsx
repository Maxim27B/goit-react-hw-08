import css from './Navigation.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <NavLink
      to="/"
      className={({ isActive }) => {
        return clsx(css.link, isActive && css.active);
      }}
    >
      Home
    </NavLink>
  );
};

export default Navigation;
