import list from 'modules/framer/list/framerListReducers';
import form from 'modules/framer/form/framerFormReducers';
import view from 'modules/framer/view/framerViewReducers';
import destroy from 'modules/framer/destroy/framerDestroyReducers';
import importerReducer from 'modules/framer/importer/framerImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});