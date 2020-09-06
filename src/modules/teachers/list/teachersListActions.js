import TeachersService from 'modules/teachers/teachersService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/teachers/list/teachersListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/teachers/list/teachersListExporterFields';

const prefix = 'Teachers_LIST';

export default paginationAction(
  prefix,
  TeachersService.list,
  selectors,
  i18n('entities.Teachers.exporterFileName'),
  exporterFields,
);
