import { observable } from 'mobx';
import React from 'react';

export default class AdminModel {
  @observable projectName = null;
  @observable priority = null;
  @observable hours = null;
  @observable resourceType = null;
  @observable taskType = null;
  @observable startDate = null;
  @observable endDate = null;
  @observable attachment = null;
}
