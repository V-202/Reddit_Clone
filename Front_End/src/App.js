import React from "react";
import "./App.css";

import AppLogin from "./components/login/AppLogin";
import AppHome from "./components/Home/App";
import {post} from "./components/Post/post";

// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div >
      <Router>
      <Switch>
          <Route path="/login" exact component={() => <AppLogin />} />

          {/* <Route path="/login" exact component={() => <AppLogin />} /> */}
          <Route exact path="/post" component={post}/>
          <Route path="/" exact component={() => <AppHome />} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
