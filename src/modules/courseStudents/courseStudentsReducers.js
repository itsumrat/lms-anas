import list from 'modules/courseStudents/list/courseStudentsListReducers';
import form from 'modules/courseStudents/form/courseStudentsFormReducers';
import view from 'modules/courseStudents/view/courseStudentsViewReducers';
import destroy from 'modules/courseStudents/destroy/courseStudentsDestroyReducers';
import importerReducer from 'modules/courseStudents/importer/courseStudentsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
});
