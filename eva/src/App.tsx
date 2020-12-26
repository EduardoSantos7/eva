import Nav from 'components/common/navbar/Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import SearchPage from 'components/searchPage/SearchPage';
import MessagesPage from 'components/MessagesPage/MessagesPage';
import LandingPage from "components/LandingPage/LandingPage/LandingPage";
import { UserProvider, useUser } from "providers/UserProvider";
import { WindowStateProvider } from "providers/WindowStateProvider";
import { ChatServiceProvider } from "providers/ChatServiceProvider";

import "App.css"

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ChatServiceProvider id={useUser().id}>
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
        </ChatServiceProvider>
      </UserProvider>
    </div>
  );
}

export default App;
