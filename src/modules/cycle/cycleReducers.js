import list from 'modules/cycle/list/cycleListReducers';
import form from 'modules/cycle/form/cycleFormReducers';
import view from 'modules/cycle/view/cycleViewReducers';
import destroy from 'modules/cycle/destroy/cycleDestroyReducers';
import importerReducer from 'modules/cycle/importer/cycleImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});