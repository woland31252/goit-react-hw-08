
import { useSelector } from 'react-redux';
import { selectErrorUser } from '../../redux/auth/selectors';
import css from '../RegistrationPage/RegistrationPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import ToastErrorUser from '../../components/ToastErrorUser';

export default function RegistrationPage() {
    const errorUser = useSelector(selectErrorUser)
    return (
        
        <div className={css.registrContainer}>
            {errorUser && <ToastErrorUser/>}
            <h2 className={css.regPageTitle}>Registration Users</h2>
            <RegistrationForm />
            
        </div>
        
    )
}