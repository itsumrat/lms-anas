import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/schoolYear/importer/schoolYearImporterSelectors';
import SchoolYearService from 'modules/schoolYear/schoolYearService';
import fields from 'modules/schoolYear/importer/schoolYearImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'school_year',
  selectors,
  SchoolYearService.import,
  fields,
  i18n('entities.SchoolYear.importer.fileName'),
);
