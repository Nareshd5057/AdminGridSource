import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AdminModel from '../../Model/AdminModel';

@inject('adminStore')
@observer
class CompAdminForm extends Component {
  constructor(props) {
    super(props);
  }
  getUpdatedKey = () => {
    return Math.random();
  };
  isValidValues = () => {
    let valid = true;
    // let newObj = this.props.adminStore.adminModel;
    // this.props.adminStore.adminModel = newObj;
    let tempArr = Object.keys(
      this.props.adminStore.adminModel
    ).filter((item, index) => {
      if (
        !this.props.adminStore.adminModel[item] &&
        item != 'attachment'
      ) {
        valid = false;
        this.props.adminStore.adminModel[item] = '';
      }
    });
    this.forceUpdate();
    return valid;
  };
  render() {
    return (
      <div>
        <form key={this.getUpdatedKey()}>
          <div className="wid-sm-3">
            <div className="label">Project Name</div>

            <div className="formInput">
              <select
                className="formControl"
                defaultValue={
                  this.props.adminStore.adminModel.projectName
                }
                onChange={(e) => {
                  this.props.adminStore.adminModel.projectName =
                    e.target.value;
                  this.isValidValues();
                }}
              >
                <option value="">Select PROJECT NAME</option>
                {this.props.adminStore.projectArr.map(
                  (item, index) => {
                    return (
                      <option
                        key={item.value + index}
                        value={item.value}
                      >
                        {item.value}
                      </option>
                    );
                  }
                )}
              </select>
              {this.props.adminStore.adminModel.projectName === '' ? (
                <span className="error">
                  Please fill Project Name
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="wid-sm-3">
            <div className="label">Priority</div>
            <div className="formInput">
              <select
                className="formControl"
                defaultValue={
                  this.props.adminStore.adminModel.priority
                }
                onChange={(e) => {
                  this.props.adminStore.adminModel.priority =
                    e.target.value;
                  this.isValidValues();
                }}
              >
                <option value="">Select PRIORITY</option>
                {this.props.adminStore.priorityArr.map(
                  (item, index) => {
                    return (
                      <option
                        key={item.value + index}
                        value={item.value}
                      >
                        {item.value}
                      </option>
                    );
                  }
                )}
              </select>
              {this.props.adminStore.adminModel.priority === '' ? (
                <span className="error">Please fill Priority</span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="wid-sm-3">
            <div className="label">Hours</div>
            <div className="formInput">
              <input
                type="number"
                className="formControl"
                defaultValue={this.props.adminStore.adminModel.hours}
                onChange={(e) => {
                  this.props.adminStore.adminModel.hours =
                    e.target.value;
                }}
                onBlur={() => this.isValidValues()}
              />
              {this.props.adminStore.adminModel.hours === '' ? (
                <span className="error">Please fill Hours</span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="wid-sm-2">
            <div className="label">Resource Type</div>
            <div className="formInput">
              <select
                className="formControl"
                defaultValue={
                  this.props.adminStore.adminModel.resourceType
                }
                onChange={(e) => {
                  this.props.adminStore.adminModel.resourceType =
                    e.target.value;
                  this.isValidValues();
                }}
              >
                <option value="">Select RESOURCE TYPE</option>
                {this.props.adminStore.resourceArr.map(
                  (item, index) => {
                    return (
                      <option
                        key={item.value + index}
                        value={item.value}
                      >
                        {item.value}
                      </option>
                    );
                  }
                )}
              </select>
              {this.props.adminStore.adminModel.resourceType ===
              '' ? (
                <span className="error">
                  Please fill Resource Type
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="wid-sm-2">
            <div className="label">Task Type</div>
            <div className="formInput">
              <select
                className="formControl"
                defaultValue={
                  this.props.adminStore.adminModel.taskType
                }
                onChange={(e) => {
                  this.props.adminStore.adminModel.taskType =
                    e.target.value;
                  this.isValidValues();
                }}
              >
                <option value="">Select TASK TYPE</option>
                {this.props.adminStore.taskArr.map((item, index) => {
                  return (
                    <option
                      key={item.value + index}
                      value={item.value}
                    >
                      {item.value}
                    </option>
                  );
                })}
              </select>
              {this.props.adminStore.adminModel.taskType === '' ? (
                <span className="error">Please fill Task Type</span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="wid-sm-3">
            <div className="label">Start Date</div>
            <div className="formInput">
              <input
                type="date"
                className="formControl"
                defaultValue={
                  this.props.adminStore.adminModel.startDate
                }
                onChange={(e) => {
                  this.props.adminStore.adminModel.startDate =
                    e.target.value;
                  this.isValidValues();
                }}
              />
              {this.props.adminStore.adminModel.startDate === '' ? (
                <span className="error">Please fill Start Date</span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="wid-sm-3">
            <div className="label">End Date</div>
            <div className="formInput">
              <input
                type="date"
                className="formControl"
                defaultValue={
                  this.props.adminStore.adminModel.endDate
                }
                onChange={(e) => {
                  this.props.adminStore.adminModel.endDate =
                    e.target.value;
                  this.isValidValues();
                }}
              />
              {this.props.adminStore.adminModel.endDate === '' ? (
                <span className="error">Please fill End Date</span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="wid-sm-3">
            <div className="label">Attachment</div>
            <div className="formInput">
              <input type="file" className="formControl" />
            </div>
          </div>

          <div className="saveSec">
            <button
              type="button"
              className="btn btnSave"
              onClick={() => {
                if (this.isValidValues())
                  this.props.adminStore.setGridArr();
              }}
            >
              Save
            </button>
          </div>
        </form>
        <div className="alert alert-primary" role="alert">
          <strong>Note:</strong> Please check the values in View Grid
        </div>
      </div>
    );
  }
}
export default CompAdminForm;
