import { lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import  Layout  from './Layout/Layout.jsx';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from '../redux/auth/operations';
// import { selectIsRefreshing } from '../redux/auth/selectors';
// import HomePage from '../pages/HomePage/HomePage.jsx';
// import RegistrationPage from '../pages/RegistrationPage/RegistrationPage.jsx';
// import LoginPage from '../pages/LoginPage/LoginPage.jsx';
// import ContactsPage from '../pages/ContactsPage/ContactsPage.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage.jsx'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage.jsx'));

export const App = () => {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useSelector(selectIsRefreshing);

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

  return  (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={<RegistrationPage />}
        //     <RestrictedRoute redirectTo="/tasks" component={<RegistrationPage />} />
        //   }
        />
        <Route
          path="/login"
          element={<LoginPage />}
        //     <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
        //   }
        />
        <Route
          path="/tasks"
          element={<ContactsPage />}
        //     <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
        //   }
        />
      </Routes>
    </Layout>
  );
};