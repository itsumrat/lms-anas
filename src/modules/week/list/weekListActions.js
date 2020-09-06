import WeekService from "modules/week/weekService";
import paginationAction from "modules/shared/pagination/paginationAction";
import selectors from "modules/week/list/weekListSelectors";
import { i18n } from "i18n";
import exporterFields from "modules/week/list/weekListExporterFields";

const prefix = "Week_LIST";

export default paginationAction(
  prefix,
  WeekService.list,
  selectors,
  i18n("entities.Week.exporterFileName"),
  exporterFields
);
