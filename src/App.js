import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CSSBaseline from "@material-ui/core/CssBaseline";
// import IndexPage from "./containers/IndexPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CSSBaseline />
        <div className="App">
          <div>
            <Switch>
              {/**
               <Route exact path="/" component={IndexPage} />
               **/}
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
