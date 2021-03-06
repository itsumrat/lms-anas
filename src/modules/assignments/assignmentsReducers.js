import list from 'modules/assignments/list/assignmentsListReducers';
import form from 'modules/assignments/form/assignmentsFormReducers';
import view from 'modules/assignments/view/assignmentsViewReducers';
import destroy from 'modules/assignments/destroy/assignmentsDestroyReducers';
import importerReducer from 'modules/assignments/importer/assignmentsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});