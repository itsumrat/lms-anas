import ResponsibleCycleService from 'modules/responsibleCycle/responsibleCycleService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/responsibleCycle/list/responsibleCycleListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/responsibleCycle/list/responsibleCycleListExporterFields';

const prefix = 'ResponsibleCycle_LIST';

export default paginationAction(
  prefix,
  ResponsibleCycleService.list,
  selectors,
  i18n('entities.ResponsibleCycle.exporterFileName'),
  exporterFields,
);
