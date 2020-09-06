import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/level/importer/levelImporterSelectors';
import LevelService from 'modules/level/levelService';
import fields from 'modules/level/importer/levelImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'level',
  selectors,
  LevelService.import,
  fields,
  i18n('entities.Level.importer.fileName'),
);
