import LevelSectorService from 'modules/levelSector/levelSectorService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/levelSector/list/levelSectorListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/levelSector/list/levelSectorListExporterFields';

const prefix = 'LevelSector_LIST';

export default paginationAction(
  prefix,
  LevelSectorService.list,
  selectors,
  i18n('entities.LevelSector.exporterFileName'),
  exporterFields,
);
