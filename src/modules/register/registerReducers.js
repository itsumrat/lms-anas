import list from "modules/register/list/registerListReducers";
import form from "modules/register/form/registerFormReducers";
import view from "modules/register/view/registerViewReducers";
import destroy from "modules/register/destroy/registerDestroyReducers";
import importerReducer from "modules/register/importer/registerImporterReducers";
import { combineReducers } from "redux";

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
