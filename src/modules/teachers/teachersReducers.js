import list from 'modules/teachers/list/teachersListReducers';
import form from 'modules/teachers/form/teachersFormReducers';
import view from 'modules/teachers/view/teachersViewReducers';
import destroy from 'modules/teachers/destroy/teachersDestroyReducers';
import importerReducer from 'modules/teachers/importer/teachersImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});