import list from 'modules/classroom/list/classroomListReducers';
import form from 'modules/classroom/form/classroomFormReducers';
import view from 'modules/classroom/view/classroomViewReducers';
import destroy from 'modules/classroom/destroy/classroomDestroyReducers';
import importerReducer from 'modules/classroom/importer/classroomImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});