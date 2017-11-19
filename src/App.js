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
      employerData: EmployersData
    };
    this.addNewEmployer = this.addNewEmployer.bind(this);
  }

  addNewEmployer(name, email, title) {
    this.setState(function(prevState, props) {
      const dummyEmployerData = {
        name,
        title,
        email,
        uuid: uuidv1()
      };
      const employerData = [dummyEmployerData, ...prevState.employerData];

      return {
        employerData: employerData
      };
    });
  }

  render() {
    return (
      <div className="app">
        <NewEmployerForm addNewEmployer={this.addNewEmployer}/>
        <EmployerList data={this.state.employerData}/>
      </div>
    );
  }
}

export default App;
