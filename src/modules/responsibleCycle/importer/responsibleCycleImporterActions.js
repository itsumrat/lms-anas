import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/responsibleCycle/importer/responsibleCycleImporterSelectors';
import ResponsibleCycleService from 'modules/responsibleCycle/responsibleCycleService';
import fields from 'modules/responsibleCycle/importer/responsibleCycleImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'responsible_cycle',
  selectors,
  ResponsibleCycleService.import,
  fields,
  i18n('entities.ResponsibleCycle.importer.fileName'),
);
