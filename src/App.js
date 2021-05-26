import { useEffect, Suspense, lazy } from 'react';
import './App.css';
// import styles from "./Routes/Route.module.css";
import LinearProgress from '@material-ui/core/LinearProgress';

// import HomePage from './Components/AppBar/HomePage';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './Redux/Auth/auth_operation';
// import { getLoading } from './Redux/Phonebook/phonebook-selectors';
import { Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AppBar from './Components/AppBar/AppBar';

const HomePage = lazy(() =>
  import('./Components/AppBar/HomePage' /* webpackChunkName: "homePage" */),
);
const Contacts = lazy(() =>
  import('./Components/Contacts' /* webpackChunkName: "contacts" */),
);
const Login = lazy(() =>
  import('./Components/Login/Login' /* webpackChunkName: "Login" */),
);
const Register = lazy(() =>
  import(
    './Components/Registration/Registration' /* webpackChunkName: "Registration" */
  ),
);
const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(state => getLoading(state));

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      <div>
        <AppBar />

        <Suspense
          fallback={
            <p>
              <LinearProgress color="secondary" />
            </p>
          }
        >
          <Switch>
            <PublicRoute
              path="/homePage"
              restricted
              redirectTo="/Login"
              component={HomePage}
            />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={Register}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={Login}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={Contacts}
            />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
