import css from '../RegistrationPage/RegistrationPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function RegistrationPage() {
    return (
        <div className={css.registrContainer}>
            <h2 className={css.regPageTitle}>Registration Users</h2>
            <RegistrationForm/>
        </div>
        
    )
}