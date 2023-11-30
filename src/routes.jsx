import React from "react";
import { Switch, Route } from "react-router";

import Home from "./pages/home";
import settemp from "./pages/settemp";
import setrout from "./pages/setrout";
import support from "./pages/support";
import gvlock from "./pages/gvlock";
import logout from "./pages/logout";
import groupmem from "./pages/groupmembers";

import gvcam from "./pages/gvcam";
const NotFound = () => (
  <div className="text-center">
    Oops, what you are looking for, does not exist.
  </div>
);

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/home" exact component={Home} />
    <Route path="/gvcam" exact component={gvcam} />
    <Route path="/settemp" exact component={settemp} />
    <Route path="/setrout" exact component={setrout} />
    <Route path="/gvlock" exact component={gvlock} />
    <Route path="/support" exact component={support} />
    <Route path="/groupmem" exact component={groupmem} />
    <Route path="/logout" exact component={logout} />
    {/* ELSE */}
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
