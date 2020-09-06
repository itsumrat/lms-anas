import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/register/importer/registerImporterSelectors';
import RegisterService from 'modules/register/registerService';
import fields from 'modules/register/importer/registerImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'register',
  selectors,
  RegisterService.import,
  fields,
  i18n('entities.Register.importer.fileName'),
);
