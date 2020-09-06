import RoomsessionService from 'modules/roomSession/roomSessionService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/roomSession/list/roomsessionListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/roomSession/list/roomsessionListExporterFields';

const prefix = 'Roomsession_LIST';

export default paginationAction(
  prefix,
  RoomsessionService.list,
  selectors,
  i18n('entities.Roomsession.exporterFileName'),
  exporterFields,
);
