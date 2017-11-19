import React, { Component } from 'react';
import './NewEmployerForm.css';

class NewEmployerForm extends Component {
  render() {
    return (
      <form className="new-employer-form">
        <button onClick={this.props.addNewEmployer}>Add Dummy Data</button>
      </form>
    );
  }
}

export default NewEmployerForm;
