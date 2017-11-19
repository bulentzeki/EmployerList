import React, { Component } from 'react';
import './App.css';

import NewEmployerForm from "./newEmployerForm/NewEmployerForm.js";
import EmployerList from "./employerList/EmployerList.js";
import EmployersData from "./Constants";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NewEmployerForm />
        <EmployerList data={EmployersData}/>
      </div>
    );
  }
}

export default App;
