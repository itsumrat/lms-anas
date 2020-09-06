import list from "modules/week/list/weekListReducers";
import form from "modules/week/form/weekFormReducers";
import view from "modules/week/view/weekViewReducers";
import destroy from "modules/week/destroy/weekDestroyReducers";
import importerReducer from "modules/week/importer/weekImporterReducers";
import { combineReducers } from "redux";

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
