import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// === No auth === \\
import Main from '../pages/Main';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

import error404 from '../pages/error404';

// === Normal auth === \\
import NormalDashboard from '../pages/NormalDashboard';
import Profile from '../pages/Profile';

// === Admin auth === \\
import AdminDashboard from '../pages/AdminDashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/register" component={Signup} cantregisterlogin />
      <Route path="/login" component={Signin} cantregisterlogin />

      <Route path="/ndashboard" component={NormalDashboard} alreadySignIn />
      <Route path="/profile" component={Profile} alreadySignIn />

      <Route path="/adashboard" component={AdminDashboard} admin />

      <Route path="/" component={error404} />
    </Switch>
  );
}
