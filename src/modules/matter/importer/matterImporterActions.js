import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/matter/importer/matterImporterSelectors';
import MatterService from 'modules/matter/matterService';
import fields from 'modules/matter/importer/matterImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'matter',
  selectors,
  MatterService.import,
  fields,
  i18n('entities.Matter.importer.fileName'),
);
