import EducDirectorService from 'modules/educDirector/educDirectorService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/educDirector/list/educDirectorListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/educDirector/list/educDirectorListExporterFields';

const prefix = 'EducDirector_LIST';

export default paginationAction(
  prefix,
  EducDirectorService.list,
  selectors,
  i18n('entities.EducDirector.exporterFileName'),
  exporterFields,
);
