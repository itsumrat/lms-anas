import FramerService from 'modules/framer/framerService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/framer/list/framerListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/framer/list/framerListExporterFields';

const prefix = 'Framer_LIST';

export default paginationAction(
  prefix,
  FramerService.list,
  selectors,
  i18n('entities.Framer.exporterFileName'),
  exporterFields,
);
