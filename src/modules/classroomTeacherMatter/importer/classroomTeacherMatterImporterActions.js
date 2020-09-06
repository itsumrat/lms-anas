import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/classroomTeacherMatter/importer/classroomTeacherMatterImporterSelectors';
import ClassroomTeacherMatterService from 'modules/classroomTeacherMatter/classroomTeacherMatterService';
import fields from 'modules/classroomTeacherMatter/importer/classroomTeacherMatterImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'classroom_teacher_matter',
  selectors,
  ClassroomTeacherMatterService.import,
  fields,
  i18n('entities.ClassroomTeacherMatter.importer.fileName'),
);
