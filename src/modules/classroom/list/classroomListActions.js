import ClassroomService from 'modules/classroom/classroomService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/classroom/list/classroomListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/classroom/list/classroomListExporterFields';

const prefix = 'Classroom_LIST';

export default paginationAction(
  prefix,
  ClassroomService.list,
  selectors,
  i18n('entities.Classroom.exporterFileName'),
  exporterFields,
);
