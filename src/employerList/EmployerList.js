import React, { Component } from 'react';
import './EmployerList.css';

class EmployerList extends Component {
  render() {
    return (
      <div className="employer-list">
        {
          this.props.data.map((employer) => {
            return (
              <div key={employer.uuid} className="employer-row">
                <div className="employer-column">{employer.name}</div>
                <div className="employer-column">{employer.title}</div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default EmployerList;
