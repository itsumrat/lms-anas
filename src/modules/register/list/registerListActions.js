import RegisterService from "modules/register/registerService";
import paginationAction from "modules/shared/pagination/paginationAction";
import selectors from "modules/register/list/registerListSelectors";
import { i18n } from "i18n";
import exporterFields from "modules/register/list/registerListExporterFields";

const prefix = "Register_LIST";

export default paginationAction(
  prefix,
  RegisterService.list,
  selectors,
  i18n("entities.Register.exporterFileName"),
  exporterFields
);
