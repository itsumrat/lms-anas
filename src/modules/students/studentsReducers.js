import list from 'modules/students/list/studentsListReducers';
import form from 'modules/students/form/studentsFormReducers';
import view from 'modules/students/view/studentsViewReducers';
import destroy from 'modules/students/destroy/studentsDestroyReducers';
import importerReducer from 'modules/students/importer/studentsImporterReducers';
import assignmentsStudents from './assignmentsStudents/assignmentsReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
  assignmentsStudents: assignmentsStudents,
});
