import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/sector/importer/sectorImporterSelectors';
import SectorService from 'modules/sector/sectorService';
import fields from 'modules/sector/importer/sectorImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'sector',
  selectors,
  SectorService.import,
  fields,
  i18n('entities.Sector.importer.fileName'),
);
