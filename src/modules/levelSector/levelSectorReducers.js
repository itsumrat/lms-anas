import list from 'modules/levelSector/list/levelSectorListReducers';
import form from 'modules/levelSector/form/levelSectorFormReducers';
import view from 'modules/levelSector/view/levelSectorViewReducers';
import destroy from 'modules/levelSector/destroy/levelSectorDestroyReducers';
import importerReducer from 'modules/levelSector/importer/levelSectorImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});