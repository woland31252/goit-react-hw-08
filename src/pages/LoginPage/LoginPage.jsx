import LoginForm from "../../components/LoginForm/LoginForm";
import css from '../LoginPage/LoginPage.module.css';
export default function LoginPage() {
    return (
        <div className={css.logInContainer}>
            <h2 className={css.logInTitle}>Log in Page</h2>
            <LoginForm/>
        </div>
        
    )
}