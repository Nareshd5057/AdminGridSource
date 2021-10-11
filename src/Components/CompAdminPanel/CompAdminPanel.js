import React, { Component } from 'react';

export default class CompAdminPanel extends Component {
  render() {
    return (
      <div className="panel">
        <div className="panelHead">{this.props.title}</div>
        <div
          className={
            this.props.title === 'View Grid'
              ? 'panelBody pad15'
              : 'panelBody'
          }
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
