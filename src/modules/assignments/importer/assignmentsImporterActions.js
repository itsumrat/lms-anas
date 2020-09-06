import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/assignments/importer/assignmentsImporterSelectors';
import AssignmentsService from 'modules/assignments/assignmentsService';
import fields from 'modules/assignments/importer/assignmentsImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'assignments',
  selectors,
  AssignmentsService.import,
  fields,
  i18n('entities.Assignments.importer.fileName'),
);
