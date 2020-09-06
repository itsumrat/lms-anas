import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/levelSector/importer/levelSectorImporterSelectors';
import LevelSectorService from 'modules/levelSector/levelSectorService';
import fields from 'modules/levelSector/importer/levelSectorImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'level_sector',
  selectors,
  LevelSectorService.import,
  fields,
  i18n('entities.LevelSector.importer.fileName'),
);
