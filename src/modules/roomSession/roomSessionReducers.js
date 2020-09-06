import list from 'modules/roomSession/list/roomsessionListReducers';
import form from 'modules/roomSession/form/roomsessionFormReducers';
import view from 'modules/roomSession/view/roomsessionViewReducers';
import live from 'modules/roomSession/live/roomSessionLiveReducers';

import destroy from 'modules/roomSession/destroy/roomsessionDestroyReducers';
import importerReducer from 'modules/roomSession/importer/roomsessionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  live,
  importer: importerReducer,
});
