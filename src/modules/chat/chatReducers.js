import list from "modules/chat/list/chatListReducers";
import form from "modules/chat/form/chatFormReducers";
import view from "modules/chat/view/chatViewReducers";
import destroy from "modules/chat/destroy/chatDestroyReducers";
import importerReducer from "modules/chat/importer/chatImporterReducers";
import { combineReducers } from "redux";

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
