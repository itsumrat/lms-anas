import ParentService from 'modules/parent/parentService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/parent/list/parentListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/parent/list/parentListExporterFields';

const prefix = 'Parent_LIST';

export default paginationAction(
  prefix,
  ParentService.list,
  selectors,
  i18n('entities.Parent.exporterFileName'),
  exporterFields,
);
