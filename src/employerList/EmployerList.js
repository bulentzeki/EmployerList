import React, { Component } from 'react';
import './EmployerList.css';

class EmployerList extends Component {
  render() {

    console.log("Data", this.props.data);
    return (
      <div className="employer-list">
        {
          this.props.data.map((employer) => {
              return (
                <div className="employer-row">
                  {employer.name}
                </div>
              )
            }
          )}
      </div>
    );
  }
}

export default EmployerList;
