import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/parent/importer/parentImporterSelectors';
import ParentService from 'modules/parent/parentService';
import fields from 'modules/parent/importer/parentImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'parent',
  selectors,
  ParentService.import,
  fields,
  i18n('entities.Parent.importer.fileName'),
);
