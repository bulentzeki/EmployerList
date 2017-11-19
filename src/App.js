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
    this.addNewEmployer = this.addNewEmployer.bind(this); //bind?
  }

  addNewEmployer(e) {
    e.preventDefault(); // what does this do?
    this.setState(function(prevState, props) { // in our case props not needed yet
      const dummyEmployerData = {
        name: "x",
        title: "x",
        email: "x@mail.com",
        uuid: uuidv1()
      };
      const employerData = [dummyEmployerData, ...prevState.employerData]; // why immutable?

      return {
        employerData: employerData
      };
    });
  }

  // passing App component's state to EmployerList
  // passing App component's addNewEmployer fuction to NewEmployerForm

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
