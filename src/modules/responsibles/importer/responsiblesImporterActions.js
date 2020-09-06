import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/responsibles/importer/responsiblesImporterSelectors';
import ResponsiblesService from 'modules/responsibles/responsiblesService';
import fields from 'modules/responsibles/importer/responsiblesImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'responsible',
  selectors,
  ResponsiblesService.import,
  fields,
  i18n('entities.Responsibles.importer.fileName'),
);
