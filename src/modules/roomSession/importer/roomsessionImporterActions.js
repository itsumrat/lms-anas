import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/roomSession/importer/roomsessionImporterSelectors';
import RoomsessionService from 'modules/roomSession/roomSessionService';
import fields from 'modules/roomSession/importer/roomsessionImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'roomsession',
  selectors,
  RoomsessionService.import,
  fields,
  i18n('entities.Roomsession.importer.fileName'),
);
