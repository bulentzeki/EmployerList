import React, { Component } from 'react';
import './App.css';

import NewEmployerForm from "./newEmployerForm/NewEmployerForm.js";
import EmployerList from "./employerList/EmployerList.js";


class App extends Component {
  render() {
    return (
      <div className="app">
        <NewEmployerForm />
        <EmployerList />
      </div>
    );
  }
}

export default App;
