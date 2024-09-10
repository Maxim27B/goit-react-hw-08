import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import Loader from './components/Loader';
import { selectAuthIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';

const App = () => {
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <>{isRefreshing ? <Loader /> : <Layout />}</>;
};
export default App;
