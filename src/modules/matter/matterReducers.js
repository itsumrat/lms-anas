import list from 'modules/matter/list/matterListReducers';
import form from 'modules/matter/form/matterFormReducers';
import view from 'modules/matter/view/matterViewReducers';
import destroy from 'modules/matter/destroy/matterDestroyReducers';
import importerReducer from 'modules/matter/importer/matterImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
