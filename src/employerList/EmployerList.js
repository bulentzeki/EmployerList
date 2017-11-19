import React, { Component } from 'react';
import './EmployerList.css';

class EmployerList extends Component {
  render() {

    console.log("Data", this.props.data);
    return (
      <div className="employer-list">
        employer list
      </div>
    );
  }
}

export default EmployerList;
