import viewActions from 'modules/shared/view/viewActions';
import MatterService from 'modules/matter/matterService';

const prefix = 'MATTER_VIEW';

export default viewActions({
  prefix,
  findFn: MatterService.find,
  redirectToOnError: '/Matter',
});
