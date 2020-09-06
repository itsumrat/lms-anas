import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/students/importer/studentsImporterSelectors';
import StudentsService from 'modules/students/studentsService';
import fields from 'modules/students/importer/studentsImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'students',
  selectors,
  StudentsService.import,
  fields,
  i18n('entities.Students.importer.fileName'),
);
