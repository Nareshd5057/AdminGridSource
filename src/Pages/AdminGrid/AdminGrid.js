import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import CompAdminGrid from '../../Components/CompAdminGrid/CompAdminGrid';
import CompAdminPanel from '../../Components/CompAdminPanel/CompAdminPanel';

@inject('adminStore')
@observer
export default class AdminGrid extends Component {
  render() {
    return (
      <div className="pageMain">
        <CompAdminPanel title="View Grid">
          <CompAdminGrid />
        </CompAdminPanel>
      </div>
    );
  }
}
