import list from "modules/element/list/elementListReducers";
import form from "modules/element/form/elementFormReducers";
import view from "modules/element/view/elementViewReducers";
import destroy from "modules/element/destroy/elementDestroyReducers";
import importerReducer from "modules/element/importer/elementImporterReducers";
import { combineReducers } from "redux";

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
