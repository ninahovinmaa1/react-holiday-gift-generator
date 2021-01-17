import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AgePage from './pages/AgePage';
import HomePage from './pages/HomePage';
import InterestPage from './pages/InterestPage';

function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Holiday Gift Generator</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Switch>

            <Route path="/interest">
              <InterestPage/>
            </Route>

            <Route path="/age">
              <AgePage/>
            </Route>

            <Route path="/">
              <HomePage/>
            </Route>

          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
