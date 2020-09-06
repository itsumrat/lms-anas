import list from 'modules/responsibleCycle/list/responsibleCycleListReducers';
import form from 'modules/responsibleCycle/form/responsibleCycleFormReducers';
import view from 'modules/responsibleCycle/view/responsibleCycleViewReducers';
import destroy from 'modules/responsibleCycle/destroy/responsibleCycleDestroyReducers';
import importerReducer from 'modules/responsibleCycle/importer/responsibleCycleImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});