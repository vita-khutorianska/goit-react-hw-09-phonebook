import { useSelector } from 'react-redux';
import { getIsAuthenticated } from './Redux/Auth/auth_selector';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
