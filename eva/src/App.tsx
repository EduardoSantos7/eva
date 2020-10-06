import Nav from 'components/navbar/Nav';
import LandingPage from 'components/landingPage/LandingPage';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react';
import SearchPage from 'components/searchPage/SearchPage';
import MessagesPage from 'components/MessagesPage/MessagesPage';

import "App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="app__body">
          <Switch>
            {/* <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={ SignUp } /> */}
          <Route path="/search" component={SearchPage} />
          <Route path="/messages/:chatId"> <MessagesPage/> <h1>Chat ID</h1></Route>
          <Route path="/messages" component={ MessagesPage } />
          <Route path="/" component={LandingPage} />
          </Switch>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
