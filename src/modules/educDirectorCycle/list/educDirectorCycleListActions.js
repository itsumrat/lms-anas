import EducDirectorCycleService from 'modules/educDirectorCycle/educDirectorCycleService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/educDirectorCycle/list/educDirectorCycleListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/educDirectorCycle/list/educDirectorCycleListExporterFields';

const prefix = 'educDirector_cycle';

export default paginationAction(
  prefix,
  EducDirectorCycleService.list,
  selectors,
  i18n('entities.EducDirectorCycle.exporterFileName'),
  exporterFields,
);
