import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Notes from "./containers/Notes";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Settings from "./containers/Settings";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <UnauthenticatedRoute path="/login" exact>
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute path="/signup" exact>
        <Signup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute path="/settings" exact>
        <Settings />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/notes/new" exact>
        <NewNote />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/notes/:id" exact>
        <Notes />
      </AuthenticatedRoute>
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}
