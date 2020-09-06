import viewActions from 'modules/shared/view/viewActions';
import FramerService from 'modules/framer/framerService';

const prefix = 'Framer_VIEW';

export default viewActions({
    prefix,
    findFn: FramerService.find,
    redirectToOnError: '/framer',
});