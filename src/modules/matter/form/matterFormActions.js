import MatterService from 'modules/matter/matterService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'MATTER_FORM';

export default formActions({
  prefix,
  createFn: MatterService.create,
  createSuccessMessageI18nKey:
    'entities.Matter.create.success',
  updateFn: MatterService.update,
  updateSuccessMessageI18nKey:
    'entities.Matter.update.success',
  findFn: MatterService.find,
  redirectTo: '/Matter',
});
