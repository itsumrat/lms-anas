import list from 'modules/educDirectorCycle/list/educDirectorCycleListReducers';
import form from 'modules/educDirectorCycle/form/educDirectorCycleFormReducers';
import view from 'modules/educDirectorCycle/view/educDirectorCycleViewReducers';
import destroy from 'modules/educDirectorCycle/destroy/educDirectorCycleDestroyReducers';
import importerReducer from 'modules/educDirectorCycle/importer/educDirectorCycleImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});