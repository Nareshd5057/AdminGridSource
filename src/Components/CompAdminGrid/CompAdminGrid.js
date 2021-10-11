import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
@inject('adminStore')
@observer
export default class CompAdminGrid extends Component {
  filterData = () => {
    let tempArr = this.props.adminStore.prevGridArr;
    this.props.adminStore.gridArr = tempArr.filter((item, index) => {
      if (
        this.props.adminStore.selectedProject !== '' &&
        this.props.adminStore.selectedTask !== ''
      ) {
        return (
          item.projectName ===
            this.props.adminStore.selectedProject &&
          item.taskType === this.props.adminStore.selectedTask
        );
      } else if (this.props.adminStore.selectedProject !== '') {
        return (
          item.projectName === this.props.adminStore.selectedProject
        );
      } else if (this.props.adminStore.selectedTask !== '') {
        return item.taskType === this.props.adminStore.selectedTask;
      } else {
        return item;
      }
    });
  };
  getUpdatedKey = () => {
    return Math.random();
  };
  render() {
    return (
      <div className="adminGrid">
        <div className="filterSection">
          <div className="showEntries">
            <label>Show</label>
            <input type="number" value={5} />
            <label>entries</label>
          </div>
          <div className="prjFilter">
            <select
              className="formControl"
              defaultValue={this.props.adminStore.selectedProject}
              onChange={(e) => {
                this.props.adminStore.selectedProject =
                  e.target.value;
                this.filterData();
              }}
            >
              <option value="">All</option>
              {this.props.adminStore.projectArr.map((item, index) => {
                return (
                  <option key={item.value + index} value={item.value}>
                    {item.value}
                  </option>
                );
              })}
            </select>
            <span></span>
          </div>
          <div className="taskType">
            <select
              className="formControl"
              defaultValue={this.props.adminStore.selectedTask}
              onChange={(e) => {
                this.props.adminStore.selectedTask = e.target.value;
                this.filterData();
              }}
            >
              <option value="">All</option>
              {this.props.adminStore.taskArr.map((item, index) => {
                return (
                  <option key={item.value + index} value={item.value}>
                    {item.value}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="gridSearch">
            <label>Search:</label>
            <input type="text" className="" />
          </div>
        </div>
        <table className="mainGrid">
          <thead>
            <tr>
              {this.props.adminStore.gridColumn.map((item, index) => {
                return (
                  <th
                    key={item.value + index}
                    value={item.value}
                    className={
                      item.value === 'Download Attachment'
                        ? 'text-center'
                        : ''
                    }
                  >
                    {item.value}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.adminStore.gridArr.map((item, index) => {
              return (
                <tr key={this.getUpdatedKey()}>
                  <td>{item.projectName}</td>
                  <td>{item.priority}</td>
                  <td>{item.hours}</td>
                  <td>{item.resourceType}</td>
                  <td>{item.taskType}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td className="text-center">
                    {<img src={'./download.png'} />}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {this.props.adminStore.gridArr.length !== 0 ? (
          <></>
        ) : (
          <h4>No records found</h4>
        )}
        <div className="mainPagination">
          <div className="paginationSec">
            <div className="entryShow">
              <span>Showing 1 to 5 entries</span>
            </div>
            <div className="pagination">
              <a className="mar" id="mar" href="#">
                &lt;
              </a>
              <span className="prev">prev</span>
              <a className="buttonSELECTED" href="#">
                1
              </a>
              <a className="button" href="#">
                2
              </a>
              <a className="button" href="#">
                3
              </a>
              <a className="button" href="#">
                4
              </a>
              <a className="button" href="#">
                5
              </a>
              <span className="next">next</span>
              <a className="mar1" id="mar" href="#">
                &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
