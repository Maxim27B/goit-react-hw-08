import css from './UserMenu.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const user = useSelector(selectAuthUser);

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

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
      <button type="button" onClick={onLogout}>
        Log Out
      </button>
    </>
  );
};

export default UserMenu;
