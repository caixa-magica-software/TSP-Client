import React, { Component } from "react";
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'

import Home from './Home';
import Footer from './Footer';
import CardSelect from './CardSelect';
import Import from './Import';
import KycVerified from './KycVerified';


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Caixa Mágica Software DocuSign TSP</NavLink></li>
            <li><NavLink to="">Help</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/CardSelect" component={CardSelect}/>
          <Route path="/Import" component={Import}/>
          <Route path="/KycVerified" component={KycVerified}/>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
