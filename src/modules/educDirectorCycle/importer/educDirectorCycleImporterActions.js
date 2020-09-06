import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/educDirectorCycle/importer/educDirectorCycleImporterSelectors';
import EducDirectorCycleService from 'modules/educDirectorCycle/educDirectorCycleService';
import fields from 'modules/educDirectorCycle/importer/educDirectorCycleImporterFields';
import { i18n } from 'i18n';

export default importerActions(
    'EducDirectorCycle_IMPORTER',
    selectors,
    EducDirectorCycleService.import,
    fields,
    i18n('entities.EducDirectorCycle.importer.fileName'),
);