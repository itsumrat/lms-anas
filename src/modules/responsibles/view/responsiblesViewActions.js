import viewActions from 'modules/shared/view/viewActions';
import ResponsiblesService from 'modules/responsibles/responsiblesService';

const prefix = 'Responsibles_VIEW';

export default viewActions({
    prefix,
    findFn: ResponsiblesService.find,
    redirectToOnError: '/responsibles',
});