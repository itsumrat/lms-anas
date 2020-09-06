import SchoolYearService from "modules/schoolYear/schoolYearService";
import paginationAction from "modules/shared/pagination/paginationAction";
import selectors from "modules/schoolYear/list/schoolYearListSelectors";
import { i18n } from "i18n";
import exporterFields from "modules/schoolYear/list/schoolYearListExporterFields";

const prefix = "SchoolYear_LIST";

export default paginationAction(
  prefix,
  SchoolYearService.list,
  selectors,
  i18n("entities.SchoolYear.exporterFileName"),
  exporterFields
);
