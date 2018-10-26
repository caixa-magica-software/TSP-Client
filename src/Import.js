import React, { Component } from "react";
import ImportForm from './components/ImportForm';

class Import extends Component {
  render() {
    return (
      <div>
        <h2>Caixa Mágica Software DocuSign TSP</h2>
          <br />
          <p>Welcome to Caixa Mágica Software DocuSign TSP</p>
          <br />
        <ImportForm />
      </div>
    );
  }
}

export default Import;
