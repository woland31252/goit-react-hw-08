
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '../../redux/contacts/operations.js';
// // import { selectLoading, selectError } from '../../redux/contactsSlice.js';
// import { selectLoading, selectError } from '../../redux/contacts/selectors.js';
// import FetchError from '../FetchError/FetchError.jsx';
// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList';
// import SearchBox from '../SearchBox/SearchBox';
// import Loader from '../Loader/Loader.jsx';
// import css from './AppBar.module.css'

// function AppBar() {
//   // const dispatch = useDispatch();
//   // const isLoading = useSelector(selectLoading);
//   // const isError = useSelector(selectError);

//   // useEffect(() => {
//   //   dispatch(fetchContacts());
//   // }, [dispatch]);

//   // return (
//   //   <div className={css.container}>
//   //     <h1 className={css.phoneTitle}>Phonebook</h1>
//   //     <ContactForm />
//   //     {isLoading && <Loader/>}
//   //     {isError ? <FetchError /> : <SearchBox />}
//   //     <ContactList/>
//   //   </div>
//   // )

//   return (

//   )
// }

import  Navigation from '../Navigation/Navigation.jsx';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn? <UserMenu />: <AuthNav />}
    </header>
  );
};

export default AppBar
