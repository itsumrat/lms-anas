import SectorService from 'modules/sector/sectorService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/sector/list/sectorListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/sector/list/sectorListExporterFields';

const prefix = 'Sector_LIST';

export default paginationAction(
  prefix,
  SectorService.list,
  selectors,
  i18n('entities.Sector.exporterFileName'),
  exporterFields,
);
