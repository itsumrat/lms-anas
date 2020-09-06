import list from 'modules/level/list/levelListReducers';
import form from 'modules/level/form/levelFormReducers';
import view from 'modules/level/view/levelViewReducers';
import destroy from 'modules/level/destroy/levelDestroyReducers';
import importerReducer from 'modules/level/importer/levelImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});