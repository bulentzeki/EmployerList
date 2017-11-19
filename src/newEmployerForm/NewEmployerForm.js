import React, { Component } from 'react';
import './NewEmployerForm.css';

class NewEmployerForm extends Component {
  componentDidMount() {
    console.log("NewEmployerForm componentDidMount");
  }

  componentWillUnmount() {
    console.log("NewEmployerForm componentWillUnmount");
  }

  render() {
    return (
      <form className="new-employer-form">
        <button onClick={this.props.addNewEmployer}>Add Dummy Data</button>
      </form>
    );
  }
}

export default NewEmployerForm;
