import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
// import SignOut from '../pages/SignUp';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/home" component={Home} />
      {/* <Route path="/home" component={Home} isPrivate /> */}
    </Switch>
  );
};

export default Routes;
