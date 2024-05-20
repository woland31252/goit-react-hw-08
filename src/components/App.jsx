import { lazy } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import  Layout  from './Layout/Layout.jsx';
import PrivateRoute  from './PrivateRoute.jsx';
import RestrictedRoute from './RestrictedRoute.jsx';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage.jsx'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing? (<p>Refreshing user please wite...</p>) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/" component={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
        />
      </Routes>
    </Layout>
  );
};