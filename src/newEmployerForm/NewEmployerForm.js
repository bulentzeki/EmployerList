import React, { Component } from 'react';
import './NewEmployerForm.css';

class NewEmployerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      title: ""
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.addNewEmployer(this.state.name, this.state.email, this.state.title);
  }

  handleChange(e) {
    const inputName = e.target.name;
    this.setState({
      [inputName]: e.target.value
    });
  }

  render() {
    return (
      <form className="new-employer-form">
        <label className="employer-input">
          <div className="input-label">Name:</div>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label className="employer-input">
          <div className="input-label">Email:</div>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
        </label>
        <label className="employer-input">
          <div className="input-label">Title:</div>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        </label>
        <button className="submit-btn" onClick={this.submitHandler}>Add Employer</button>
      </form>
    );
  }
}

export default NewEmployerForm;
