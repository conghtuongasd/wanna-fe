import React, { lazy } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './component/main';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
