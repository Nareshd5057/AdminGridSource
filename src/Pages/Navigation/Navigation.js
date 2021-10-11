import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigationBtn">
        {/* <button className="btn activeNav"> */}
        <NavLink
          className="btn"
          to="/AdminForm"
          activeClassName={'activeNav'}
        >
          Admin Form
        </NavLink>
        {/* </button> */}
        {/* <button className="btn"> */}
        <NavLink
          className="btn"
          activeClassName={'activeNav'}
          to="/AdminGrid"
        >
          View Grid
        </NavLink>
        {/* </button> */}
      </div>
    );
  }
}
