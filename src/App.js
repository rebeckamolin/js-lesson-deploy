import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div>
      <Switch>
        <Route>
          <AboutMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
