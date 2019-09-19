import React, { Component } from 'react';
import {
  HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'swagger-ui-react/swagger-ui.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'w3-css/3/w3.css';
import '../config/style/index.css';
import '../config/style/fonts.css';

import NavMenu from './NavMenu';
import MainPage from './MainPage';
import ApiPage from './ApiPage';
import ModelPage from './ModelPage';
import AdminPage from './AdminPage';

class AppPage extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavMenu />
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/model" component={ModelPage}/>
            <Route path="/api" component={ApiPage}/>
            <Route path="/admin" component={AdminPage}/>
            <Route component={MainPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppPage;
