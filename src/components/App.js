import React from "react";
import Addword from "./Addword";
import Welcome from "./Welcome";
import Wordlist from "./Wordlist";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/addword">
          <Addword />
        </Route>
        <Route exact path="/wordlist">
          <Wordlist />
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
