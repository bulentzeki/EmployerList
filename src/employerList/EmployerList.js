import React, { Component } from 'react';
import './EmployerList.css';

class EmployerList extends Component {
  constructor(props) {
    super(props);
    this.state = {filterText: "", filterInputVal: ""};
    this.handleChange = this.handleChange.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  handleChange(e) {
    this.setState({
      filterInputVal: e.target.value
    });
  }

  applyFilter() {
    this.setState(function(prevState) {
      return {
        filterText: prevState.filterInputVal
      };
    });
  }

  render() {
    const filteredData = this.props.data.filter(employer => {
      return employer.name.startsWith(this.state.filterText);
    });

    console.log("EmployerList render");

    return (
      <div className="employer-list">
        <div className="filter-row">
          <input className="filter-input" type="text" value={this.state.filterInputVal} onChange={this.handleChange}/>
          <button className="filter-btn" onClick={this.applyFilter}>Filter by Name</button>
        </div>

        {
          filteredData.map((employer) => {
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
