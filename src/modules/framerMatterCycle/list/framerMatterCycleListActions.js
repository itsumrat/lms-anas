import FramerMatterCycleService from 'modules/framerMatterCycle/framerMatterCycleService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/framerMatterCycle/list/framerMatterCycleListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/framerMatterCycle/list/framerMatterCycleListExporterFields';

const prefix = 'framer_matter_cycle';

export default paginationAction(
  prefix,
  FramerMatterCycleService.list,
  selectors,
  i18n('entities.FramerMatterCycle.exporterFileName'),
  exporterFields,
);
