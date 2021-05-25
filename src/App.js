import { Component, Suspense, lazy } from 'react';
import './App.css';
// import styles from "./Routes/Route.module.css";
import LinearProgress from '@material-ui/core/LinearProgress';

// import HomePage from './Components/AppBar/HomePage';
import { connect } from 'react-redux';
import { getUser } from './Redux/Auth/auth_operation';
import { getLoading } from './Redux/Phonebook/phonebook-selectors';
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
class App extends Component {
  // function App ()
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <div>
        {this.props.isLoading && <LinearProgress color="secondary" />}
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
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
