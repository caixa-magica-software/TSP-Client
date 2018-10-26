import React from 'react';
import {
  Link
} from 'react-router-dom';

class CreditForm extends React.Component {

  render() {
    return (
      <div>
        <h2>
          Step 1 - Introduce the Base64 Hash string of the your signature
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <br />
            <label>
              Introduce the Base64 Hash string of the your signature
            </label>
            <input
              type="text"
              name="walletAddress"
              onChange={this.handleChange}
              class="form-control"
              required/>
          </div>
          <Link to ='/CardSelect' >
            <button>
              Next Step
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CreditForm;
