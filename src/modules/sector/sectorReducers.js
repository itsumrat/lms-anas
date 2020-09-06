import list from 'modules/sector/list/sectorListReducers';
import form from 'modules/sector/form/sectorFormReducers';
import view from 'modules/sector/view/sectorViewReducers';
import destroy from 'modules/sector/destroy/sectorDestroyReducers';
import importerReducer from 'modules/sector/importer/sectorImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});