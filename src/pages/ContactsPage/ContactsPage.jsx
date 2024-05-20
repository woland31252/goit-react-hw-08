
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations.js';
import { selectLoading, selectError } from '../../redux/contacts/selectors.js';
import FetchError from '../../components/FetchError/FetchError.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import css from '../ContactsPage/ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsContainer}>
      <h1 className={css.phoneTitle}>Phonebook</h1>
      <ContactForm />
      {isLoading && <Loader/>}
      {isError ? <FetchError /> : <SearchBox />}
      <ContactList/>
    </div>
  )
}