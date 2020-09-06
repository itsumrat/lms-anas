import StudentsService from 'modules/students/studentsService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/students/list/studentsListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/students/list/studentsListExporterFields';

const prefix = 'Students_LIST';

export default paginationAction(
  prefix,
  StudentsService.list,
  selectors,
  i18n('entities.Students.exporterFileName'),
  exporterFields,
);
