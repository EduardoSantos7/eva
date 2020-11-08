import Nav from 'components/common/navbar/Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import SearchPage from 'components/searchPage/SearchPage';
import MessagesPage from 'components/MessagesPage/MessagesPage';
import LandingPage from "components/LandingPage/LandingPage/LandingPage";
import { UserProvider } from "providers/UserProvider";
import { WindowStateProvider } from "providers/WindowStateProvider";

import "App.css"

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Nav />
          <div className="app__body">
            <Switch>
              <Route path="/search" component={SearchPage} />
              <Route path="/messages/:chatId">
                <WindowStateProvider>
                  <MessagesPage />
                </WindowStateProvider>
              </Route>
              <Route path="/" component={LandingPage} />
            </Switch>

          </div>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
