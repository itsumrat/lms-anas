import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/timeTableTeacher/list/timeTableTeacherListActions';
import destroyActions from 'modules/timeTableTeacher/destroy/timeTableTeacherDestroyActions';
import selectors from 'modules/timeTableTeacher/list/timeTableTeacherListSelectors';
import destroySelectors from 'modules/timeTableTeacher/destroy/timeTableTeacherDestroySelectors';
import model from 'modules/timeTableTeacher/timeTableTeacherModel';
import TimeTableTeacherSelectors from 'modules/timeTableTeacher/timeTableTeacherSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import FilesListView from 'view/shared/list/FileListView';
import Calendar from 'view/shared/components/calendar/components/Calendar';
import {
  sampleJSONForStudent,
  sampleJSONForTeacher,
} from 'view/shared/components/calendar/temp/sampleJSON';
import MonthCalendar from '../../shared/components/calendar/components/Calendar/MonthCalendar';

const { fields } = model;

class TimeTableTeacherListTable extends Component {
  render() {
    const { pagination, rows, loading } = this.props;
    console.log(sampleJSONForTeacher)
    return (
      <div style={{width: '100%'}}>

        <Calendar sampleJSON={sampleJSONForTeacher} />
        <hr/>
        <MonthCalendar/>
      </div>
    );
  }
}

function select(state) {
  return {
    loading:
      selectors.selectLoading(state) ||
      destroySelectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
    hasPermissionToEdit: TimeTableTeacherSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: TimeTableTeacherSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(TimeTableTeacherListTable);
