import list from 'modules/timeTableTeacher/list/timeTableTeacherListReducers';
import destroy from 'modules/timeTableTeacher/destroy/timeTableTeacherDestroyReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  destroy,
});
