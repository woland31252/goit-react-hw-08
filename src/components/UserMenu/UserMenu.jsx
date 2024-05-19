// import {useSelector } from 'react-redux';
// import { logOut } from '../../redux/auth/operations';
// import { selectUser } from '../../redux/auth/selectors.js';
import css from './UserMenu.module.css';

export const UserMenu = () => {
//   const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {}</p>
      <button type="button" onClick={() => {}}>
        Logout
      </button>
    </div>
  );
};