import list from "modules/schoolYear/list/schoolYearListReducers";
import form from "modules/schoolYear/form/schoolYearFormReducers";
import view from "modules/schoolYear/view/schoolYearViewReducers";
import destroy from "modules/schoolYear/destroy/schoolYearDestroyReducers";
import importerReducer from "modules/schoolYear/importer/schoolYearImporterReducers";
import { combineReducers } from "redux";

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
