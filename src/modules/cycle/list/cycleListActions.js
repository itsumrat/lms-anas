import CycleService from 'modules/cycle/cycleService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/cycle/list/cycleListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/cycle/list/cycleListExporterFields';

const prefix = 'Cycle_LIST';

export default paginationAction(
  prefix,
  CycleService.list,
  selectors,
  i18n('entities.Cycle.exporterFileName'),
  exporterFields,
);
