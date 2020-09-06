import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/cycle/importer/cycleImporterSelectors';
import CycleService from 'modules/cycle/cycleService';
import fields from 'modules/cycle/importer/cycleImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'cycle',
  selectors,
  CycleService.import,
  fields,
  i18n('entities.Cycle.importer.fileName'),
);
