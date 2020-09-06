import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/framer/importer/framerImporterSelectors';
import FramerService from 'modules/framer/framerService';
import fields from 'modules/framer/importer/framerImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'framer',
  selectors,
  FramerService.import,
  fields,
  i18n('entities.Framer.importer.fileName'),
);
