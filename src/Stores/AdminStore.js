import { observable, action, makeObservable } from 'mobx';
import AdminModel from '../Model/AdminModel';

export class AdminStore {
  @observable isCreatingComment = false;
  @observable adminModel = new AdminModel();
  @observable gridColumn = [
    { value: 'Project Name' },
    { value: 'Priority' },
    { value: 'Hours' },
    { value: 'Resource Type' },
    { value: 'Task Type' },
    { value: 'Start Date' },
    { value: 'End Date' },
    { value: 'Download Attachment' },
  ];
  @observable projectArr = [
    { value: 'Livonia LTD Project' },
    { value: 'Adro CTP Project' },
    { value: 'KCPTS AdSo Project' },
    { value: 'Anion KCT Project' },
    { value: 'Live Arch PCPs Project' },
  ];
  @observable priorityArr = [
    { value: 'P1' },
    { value: 'P2' },
    { value: 'P3' },
  ];
  @observable resourceArr = [
    { value: 'Wireframe' },
    { value: 'HTML Conversion' },
    { value: 'Bugs' },
    { value: 'Developer Support' },
  ];
  @observable taskArr = [
    { value: 'New Task' },
    { value: 'Continue Task' },
  ];
  @observable gridArr = [];
  @observable selectedProject = '';
  @observable selectedTask = '';
  @observable prevGridArr = [];
  constructor() {
    makeObservable(this);
  }
  @action
  setFilter(filter) {
    this.isCreatingComment = filter;
  }
  @action
  setGridArr() {
    this.gridArr.push(this.adminModel);
    let newObj = new AdminModel();
    this.adminModel = newObj;
    this.prevGridArr = this.gridArr;
  }
}
