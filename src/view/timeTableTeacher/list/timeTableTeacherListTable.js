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
  colors,
  sampleJSONForStudent,
  sampleJSONForTeacher,
} from 'view/shared/components/calendar/temp/sampleJSON';
import MonthCalendar from '../../shared/components/calendar/components/Calendar/MonthCalendar';
import WeekCalender from '../../shared/components/calendar/components/Calendar/WeekCalender';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { monthlyEvents, weekDays } from '../../shared/components/calendar/components/Calendar/constants';
import moment from 'moment';
import { getRandomColor } from '../../shared/components/calendar/utils/utils';

const { fields } = model;
export const NewParseEvent = (event, firstDayOfWeek) => {
  let startDate = moment(firstDayOfWeek)
    .add(event.day, 'day')
    .format('YYYY-MM-DD');
  let start_time = moment(firstDayOfWeek)
    .add(event.day, 'day')
    .format('YYYY-MM-DD');

  const start = moment(`${startDate} ${event.start_time}`).toDate();
  const end = moment(`${start_time} ${event.end_time}`).toDate();
  return {
    start,
    end,
    title: event.element.name,
    matterName: event.classroom_teacher_matter.matter.name,
    elementName: event.element.name,
    classroomName:
    event.classroom_teacher_matter.classroom.name,
    bgColor: getRandomColor(colors),
    schoolYear: event.week.school_year.name,
    day: weekDays[event.day],
    teacherName: `${event.classroom_teacher_matter.teacher.user.first_name} ${event.classroom_teacher_matter.teacher.user.last_name}`,
  };
};
export const parseEventsData = (events, firstDayOfWeek) => {
  return events.map((event) => {
    return NewParseEvent(event, firstDayOfWeek);
  });
};

export const EventView = ({event} ) => {
    console.log(event)
  return (
    <div style={{background: event.bgColor, height: '100%'}} >
      <div style={{display: 'flex', flexDirection: 'column', padding: 10}}>
        <p style={{marginBottom: 5}}>
          {moment(event.start,'MM-DD-YYYY HH:mm').format('HH:mm')}{` - `}
          {moment(event.end,'MM-DD-YYYY HH:mm').format('HH:mm')}
        </p>
        <h5 style={{marginBottom: 0}} >{event.title}</h5>
      </div>
    </div>
  );
}
class TimeTableTeacherListTable extends Component {
  render() {
    const { pagination, rows, loading } = this.props;
    // console.log(sampleJSONForTeacher)
    return (
      <div style={{width: '100%'}}>
        <WeekCalender sampleJSON={sampleJSONForTeacher}/>
        {/*<Calendar sampleJSON={sampleJSONForTeacher} />*/}
        <hr/>
        <MonthCalendar sampleJSON={sampleJSONForStudent}/>

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
