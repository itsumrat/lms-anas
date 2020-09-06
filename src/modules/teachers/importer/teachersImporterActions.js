import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/teachers/importer/teachersImporterSelectors';
import TeachersService from 'modules/teachers/teachersService';
import fields from 'modules/teachers/importer/teachersImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'teachers',
  selectors,
  TeachersService.import,
  fields,
  i18n('entities.Teachers.importer.fileName'),
);
