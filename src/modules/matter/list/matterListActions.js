import MatterService from 'modules/matter/matterService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/matter/list/matterListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/matter/list/matterListExporterFields';

const prefix = 'MATTER_LIST';

export default paginationAction(
  prefix,
  MatterService.list,
  selectors,
  i18n('entities.Matter.exporterFileName'),
  exporterFields,
);
