import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/classroom/importer/classroomImporterSelectors';
import ClassroomService from 'modules/classroom/classroomService';
import fields from 'modules/classroom/importer/classroomImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'classroom',
  selectors,
  ClassroomService.import,
  fields,
  i18n('entities.Classroom.importer.fileName'),
);
