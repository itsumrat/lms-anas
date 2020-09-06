import LevelService from 'modules/level/levelService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/level/list/levelListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/level/list/levelListExporterFields';

const prefix = 'Level_LIST';

export default paginationAction(
  prefix,
  LevelService.list,
  selectors,
  i18n('entities.Level.exporterFileName'),
  exporterFields,
);
