import list from 'modules/responsibles/list/responsiblesListReducers';
import form from 'modules/responsibles/form/responsiblesFormReducers';
import view from 'modules/responsibles/view/responsiblesViewReducers';
import destroy from 'modules/responsibles/destroy/responsiblesDestroyReducers';
import importerReducer from 'modules/responsibles/importer/responsiblesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});