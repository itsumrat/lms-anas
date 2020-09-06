import list from 'modules/educDirector/list/educDirectorListReducers';
import form from 'modules/educDirector/form/educDirectorFormReducers';
import view from 'modules/educDirector/view/educDirectorViewReducers';
import destroy from 'modules/educDirector/destroy/educDirectorDestroyReducers';
import importerReducer from 'modules/educDirector/importer/educDirectorImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    form,
    view,
    destroy,
    importer: importerReducer,
});