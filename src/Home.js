import React, { Component } from "react";
import CreditForm from './components/CreditForm';


class Home extends Component {
  render() {
    return (
      <div>
        <h2>Caixa Mágica Software DocuSign TSP</h2>
          <br />
          <p>Welcome to Caixa Mágica Software DocuSign TSP</p>
          <br />
        <CreditForm />
      </div>
    );
  }
}

export default Home;
