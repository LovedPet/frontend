import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { publicRouteList } from './routeList';

const Routes: React.FC = () => {
  const publicRouteComponents = publicRouteList.map(
    ({ component: Component, path, exact, title }) => {
      document.title = title;

      return (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props: any) => <Component {...props} />}
        />
      );
    },
  );



  // const authenticated = isLogged();

  return (
    <BrowserRouter>
      <Switch>
        {publicRouteComponents}
        <Redirect to="/register" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
