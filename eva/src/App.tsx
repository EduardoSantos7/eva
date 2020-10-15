import Nav from 'components/navbar/Nav';
import LandingPage from 'components/landingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import SearchPage from 'components/searchPage/SearchPage';
import MessagesPage from 'components/MessagesPage/MessagesPage';
import { WindowStateProviderProvider } from "providers/WindowStateProvider";

import "App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="app__body">
          <Switch>
            <Route path="/search" component={SearchPage} />
            <Route path="/messages/:chatId">
              <WindowStateProviderProvider>
                <MessagesPage />
              </WindowStateProviderProvider>
            </Route>
            <Route path="/" component={LandingPage} />
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
