import list from 'modules/framerMatterCycle/list/framerMatterCycleListReducers';
import form from 'modules/framerMatterCycle/form/framerMatterCycleFormReducers';
import view from 'modules/framerMatterCycle/view/framerMatterCycleViewReducers';
import destroy from 'modules/framerMatterCycle/destroy/framerMatterCycleDestroyReducers';
import importerReducer from 'modules/framerMatterCycle/importer/framerMatterCycleImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});