import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from './Navigation.module.css';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.link}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && <NavLink className={buildLinkClass} to="/contacts">
        Contacts
      </NavLink>}
    </nav>
  );
};

export default Navigation;