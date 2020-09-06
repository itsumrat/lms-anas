import CourseStudentsService from 'modules/courseStudents/courseStudentsService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/courseStudents/list/courseStudentsListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/courseStudents/list/courseStudentsListExporterFields';

const prefix = 'MATTER_LIST';
console.log('heeey');
export default paginationAction(
  prefix,
  CourseStudentsService.list,
  selectors,
  i18n('entities.CourseStudents.exporterFileName'),
  exporterFields,
);
