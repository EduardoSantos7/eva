import Nav from 'components/navbar/Nav';
import LandingPage from 'components/landingPage/LandingPage';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react';
import SearchPage from 'components/searchPage/SearchPage';
import MessagesPage from 'components/MessagesPage/MessagesPage';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            {/* <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={ SignUp } /> */}
          <Route path="/search" component={SearchPage} />
          <Route path="/messages" component={ MessagesPage } />
          <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
