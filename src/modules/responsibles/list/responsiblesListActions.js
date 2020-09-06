import ResponsiblesService from 'modules/responsibles/responsiblesService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/responsibles/list/responsiblesListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/responsibles/list/responsiblesListExporterFields';

const prefix = 'Responsibles_LIST';

export default paginationAction(
  prefix,
  ResponsiblesService.list,
  selectors,
  i18n('entities.Responsibles.exporterFileName'),
  exporterFields,
);
