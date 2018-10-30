import React, { Component } from "react";
import CardForm from './components/CardForm';


class Home extends Component {
  render() {
    return (
      <div>
        <h2>Caixa Mágica Software DocuSign TSP</h2>
          <br />
          <p>Welcome to Caixa Mágica Software DocuSign TSP</p>
          <br />
        <CardForm />
      </div>
    );
  }
}

export default Home;
