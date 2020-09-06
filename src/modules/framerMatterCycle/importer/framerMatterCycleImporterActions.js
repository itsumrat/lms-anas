import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/framerMatterCycle/importer/framerMatterCycleImporterSelectors';
import FramerMatterCycleService from 'modules/framerMatterCycle/framerMatterCycleService';
import fields from 'modules/framerMatterCycle/importer/framerMatterCycleImporterFields';
import { i18n } from 'i18n';

export default importerActions(
    'FramerMatterCycle_IMPORTER',
    selectors,
    FramerMatterCycleService.import,
    fields,
    i18n('entities.FramerMatterCycle.importer.fileName'),
);