import React from 'react';
import Main from '../main/main.jsx';
import {Router, Switch, Route} from 'react-router-dom';
import history from '../../history/history';
import {AppRoute} from '../../utils/const.js';
import Orgchart from '../orgchart/orgchart.jsx';
import RoutingScreen from '../routing-screen/routing-screen.jsx';

const App = () => {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={`${AppRoute.ROOT}`} render={(routeProps) => {
          return <Main {...routeProps}/>;
        }} />
      </Switch>
      <Switch>
        <Route exact path={`${AppRoute.ORGCHART}`} render={(routeProps) => {
          return <Orgchart {...routeProps}/>;
        }} />
      </Switch>
      <Switch>
        <Route exact path={`${AppRoute.ROUTING}`} render={(routeProps) => {
          return <RoutingScreen {...routeProps}/>;
        }} />
      </Switch>
    </Router>
  );
};

export default App;
