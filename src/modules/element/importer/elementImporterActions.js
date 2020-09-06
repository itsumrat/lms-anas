import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/element/importer/elementImporterSelectors';
import ElementService from 'modules/element/elementService';
import fields from 'modules/element/importer/elementImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'element',
  selectors,
  ElementService.import,
  fields,
  i18n('entities.Element.importer.fileName'),
);
