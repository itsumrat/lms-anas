import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/educDirector/list/educDirectorListActions';
import EducDirectorService from 'modules/educDirector/educDirectorService';

const prefix = 'EducDirector_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: EducDirectorService.destroyAll,
  destroySuccessMessageI18nKey:
    'entities.EducDirector.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'entities.EducDirector.destroyAll.success',
  redirectTo: '/educDirector',
  listActions,
});
