import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import BubblesTheme from './pages/BubblesTheme'
import FlowersTheme from './pages/FlowersTheme'
import Funnel from './pages/Funnel'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bubbles-theme" render={props => <BubblesTheme {...props} showText="true" />} showText="true" />
          <Route path="/flowers-theme" render={props => <FlowersTheme {...props} showText="true" />} showText="true" />
          <Route path="/funnel-theme" render={props => <Funnel {...props} showText="true" />} showText="true" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
