import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";

import "./App.css";
import ContextProvider from "./contexts/Context";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route
              exact
              path="/thisiswhereiwanttogo/:anyvariableparam"
              component={Lyrics}
            />
          </Switch>
        </Fragment>
      </Router>
    </ContextProvider>
  );
}

export default App;
