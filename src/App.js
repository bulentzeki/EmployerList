import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

import './App.css';

import NewEmployerForm from "./newEmployerForm/NewEmployerForm.js";
import EmployerList from "./employerList/EmployerList.js";
import EmployersData from "./Constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employerData: EmployersData,
      isAddBtnVisible: true
    };
    this.addNewEmployer = this.addNewEmployer.bind(this);
  }

  addNewEmployer(e) {
    e.preventDefault();
    this.setState(function(prevState, props) {
      const dummyEmployerData = {
        name: "x",
        title: "x",
        email: "x@mail.com",
        uuid: uuidv1()
      };
      const employerData = [dummyEmployerData, ...prevState.employerData];

      return {
        employerData: employerData,
        isAddBtnVisible: false
      };
    });
  }

  // Conditional rendering
  // Ternary expression?

  render() {
    return (
      <div className="app">
        {this.state.isAddBtnVisible ? <NewEmployerForm addNewEmployer={this.addNewEmployer}/> : null}
        <EmployerList data={this.state.employerData}/>
      </div>
    );
  }
}

export default App;
