import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';

import Loader from '../Loader';
import AppBar from '../AppBar/AppBar';

const HomePage = lazy(() => import('../../pages/Homepage/Homepage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

const Layout = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
