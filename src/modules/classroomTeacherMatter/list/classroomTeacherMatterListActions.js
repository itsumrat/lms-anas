import ClassroomTeacherMatterService from 'modules/classroomTeacherMatter/classroomTeacherMatterService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/classroomTeacherMatter/list/classroomTeacherMatterListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/classroomTeacherMatter/list/classroomTeacherMatterListExporterFields';

const prefix = 'ClassroomTeacherMatter_LIST';

export default paginationAction(
  prefix,
  ClassroomTeacherMatterService.list,
  selectors,
  i18n('entities.ClassroomTeacherMatter.exporterFileName'),
  exporterFields,
);
