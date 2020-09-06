import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/educDirector/importer/educDirectorImporterSelectors';
import EducDirectorService from 'modules/educDirector/educDirectorService';
import fields from 'modules/educDirector/importer/educDirectorImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'educDirector',
  selectors,
  EducDirectorService.import,
  fields,
  i18n('entities.EducDirector.importer.fileName'),
);
