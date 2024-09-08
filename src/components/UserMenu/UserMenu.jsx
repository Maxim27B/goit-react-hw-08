import css from './UserMenu.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const user = useSelector(selectAuthUser);
  return (
    <>
      <NavLink
        to="/contacts"
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.active);
        }}
      >
        Contacts
      </NavLink>
      <p className={css.welcomeText}>Hello, {user.name}</p>
    </>
  );
};

export default UserMenu;
