import AssignmentsService from 'modules/assignments/assignmentsService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/assignments/list/assignmentsListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/assignments/list/assignmentsListExporterFields';

const prefix = 'Assignments_LIST';

export default paginationAction(
  prefix,
  AssignmentsService.list,
  selectors,
  i18n('entities.Assignments.exporterFileName'),
  exporterFields,
);
