import ElementService from "modules/element/elementService";
import paginationAction from "modules/shared/pagination/paginationAction";
import selectors from "modules/element/list/elementListSelectors";
import { i18n } from "i18n";
import exporterFields from "modules/element/list/elementListExporterFields";

const prefix = "Element_LIST";

export default paginationAction(
  prefix,
  ElementService.list,
  selectors,
  i18n("entities.Element.exporterFileName"),
  exporterFields
);
