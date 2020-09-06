import list from 'modules/parent/list/parentListReducers';
import form from 'modules/parent/form/parentFormReducers';
import view from 'modules/parent/view/parentViewReducers';
import destroy from 'modules/parent/destroy/parentDestroyReducers';
import importerReducer from 'modules/parent/importer/parentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});