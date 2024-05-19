import css from '../RegistrationPage/RegistrationPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function RegistrationPage() {
    return (
        <div className={css.registrContainer}>
            <p>Registration Page</p>
            <RegistrationForm/>
        </div>
        
    )
}