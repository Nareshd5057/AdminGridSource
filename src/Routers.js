import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AdminForm from './Pages/AdminForm/AdminForm';
import AdminGrid from './Pages/AdminGrid/AdminGrid';
export default function Routers() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/AdminForm" />}
      />
      <Route exact path="/AdminForm" component={AdminForm} />
      <Route path="/AdminGrid" component={AdminGrid} />
    </Switch>
  );
}
